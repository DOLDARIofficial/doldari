import {
  Controller, Get, UseGuards, Req, Body, Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { userDto } from './dto/user.dto';
import { User } from './entities/testUser.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Google Login
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    return (console.log(req));
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req) {
    console.log(req);
    return 'ok';
  }

  /* 
   guard는 처음 로그인한 유저가 처음로그인한것인지 아닌지를 확인해주고
   처음 로그인한 유저가 아닐경우 jwt passport validation과정을 생략해준다.
   처음로그인한 유저인경우 validate함수를 실행시킨다.
   */
  @Post('create')
  @UseGuards(AuthGuard('google'))
  async createUser(@Body() user: userDto): Promise<User> {
    return this.authService.createUser(user);
  }
}
