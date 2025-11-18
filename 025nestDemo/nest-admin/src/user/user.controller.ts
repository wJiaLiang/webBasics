import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from 'src/enum/config.enum';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
        private configService:ConfigService,
    ) {}

    @Get()
    getUser():any {
        let db = this.configService.get("DB")
        console.log(db);
        console.log(this.configService.get(ConfigEnum.DB_HOST))
        return this.userService.getUser();
    }

    @Post()
    addUser():string {
        return '添加用户';
    }
}
