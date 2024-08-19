import { Controller, Get,Query,Param } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("index")
  getIndex(@Query() q:string):string{
    return q || "没有参数"
  }
  @Get(":id")
  getParam(@Param() params):string{
    console.log(params);
    return params || "Parms 参数"
  }
}
