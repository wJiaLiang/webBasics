import { Controller,Get,Post,Param,Query,Body,Res } from '@nestjs/common';
import { raceWith } from 'rxjs';

@Controller('user')
export class UserController {
    @Get('login')
    login():any{
        console.log("post data");

    }
    @Post('singup')
    singup(@Body() body:any,@Res() res:any):any{
        console.log(body);
        console.log(res);
        return body;
    }
}
