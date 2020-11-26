// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
import {
  Controller, Get, Req, UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // @UseGuards(AuthGuard('google'))
  // async googleAuth(@Req() req: any): Promise<any> {
  //   return (console.log(req));
  // }

  // @Get('redirect')
  // @UseGuards(AuthGuard('google'))
  // googleAuthRedirect(@Req() req: Request): any {
  //   return this.appService.googleLogin(req);
  // }
  @Get()
  home(){
    return 'hello!!!';
  }
  @Get()
  getHello(){
    return 'hello!! gethello';
  }

}
