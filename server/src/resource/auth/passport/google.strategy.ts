import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

// import { googleConfig } from '../config/google-config';
// import { JwtService } from '@nestjs/jwt';
import { VerifyCallback } from 'passport-jwt';
// import { AuthService } from '../auth.service';

const config = {
  clientID: '822280945870-am3tfoa2vg72q6sabr7qi0ogoj9gast6.apps.googleusercontent.com',
  clientSecret: 'ivn2SYc6ASHZZcgvU9PNHKoc',
  callbackURL: 'http://localhost:3000/auth/google/callback',
  passReqToCallback: true,
  scope: ['email', 'profile'],
};
/* 
  passport class -> valid를 검사하고 유저가 타당하다면 유저의 전체정보를 돌려준다.
  이곳에서 validate method를 작성해야한다.
  configOptions => google developer console에서가져온 api 정보를 super에 넣어준다.
  super에는 Option object를 넘겨준다.
  passport strategey가 필요로하는 option객체를 넘겨줄 수 있다.

  token 발행과 refresh token 발행 :  refresh token을 발행하려면 middleware를사용한다 (express의 경우)
 */
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    // private readonly authService: AuthService,
    // private jwtService: JwtService,
  ) {
    super({
      ...config,
    });
  }

  /* 
      accessToken: string, refreshToken: string, profile, done: Function
      console.log('accessToken in Google validate : ', accessToken);
      console.log('refreshToken in Google validate : ', refreshToken);
      console.log('[In Google Validate]', profile);
 */
  async validate(accessToken: string, refreshToken: string, profile: any, done: Function): Promise<any> {
    try {
      const { name, emails, photos } = profile;

      const newUser = {
        email: emails[0].value,
        firstName: name.givenName,
        lastNaem: name.familyName,
        picture: photos[0].value,
        accessToken,
      };
      // done(null, newUser);

      /*
        passport의 valid function이 user의 존재와 신원을 확인할때 이 callback함수는 done을 발생시킨다.
        done이 credential이 타당하다면 done(null, user)를 작동하고
        done의 credential이 타당하지 않다면 done(null, false)를 작동한다. 
       */
      return this.authService.createUser(newUser)
        .then(() => {
          done(null, profile.name);
        })
        .catch((err) => {
          console.log('[Error in Google Validation] ... ');
          console.log(err);
          done(null, false);
        });

      /*
      1. 회원이 아닌경우  ->  회원가입 수행 , 토큰 발행 , done()
      2. 회원인 경우      ->  토큰 발행 , done()
          
      3. accessToken 을 통한 추가 API 가 필요한 경우  -> accessToken / refreshToken 저장 및 재요청
            */
    } catch (err) {
      done(err, false);
    }
  }
}
