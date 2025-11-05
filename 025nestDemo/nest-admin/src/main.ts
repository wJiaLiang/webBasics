import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { networkInterfaces } from 'os';

function getLocalIp() {
  const nets = networkInterfaces();
  const results = [];
  
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // 跳过内部 IPv6 和非 IPv4 地址
      if (net.family === 'IPv4' && !net.internal) {
        results.push(net.address);
      }
    }
  }
  return results;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = await app.listen(3000);
  const localIps = getLocalIp();
  const port = 3000;
  console.log('应用程序已启动:');
  console.log(`- Local:   http://localhost:${port}`);
  console.log(`- Network: http://${localIps[0]}:${port}`);
}
bootstrap();