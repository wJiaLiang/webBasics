import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser(): Object {
        return { code: 200,data:[], msg: '请求成功 service' };
    }
}
