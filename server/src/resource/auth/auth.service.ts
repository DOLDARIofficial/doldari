import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/testUser.entity';

/*
 vanilla passport 에서는 2가지를 제공해야한다.
 1. secret to sign tokens
 2. A verify callbacks : here you verify users exists, and wether their
 credentails valid
 --> passport library는 이 콜백함수를 확인하고, 검사가 통과되면 전체 유저정보를 리턴해준다.
 authService :  
 */
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  /* 
    
    */
  async validateUser(username: string): Promise<any> {
    const user = await this.userRepository.findOne(username);
    if (user) {
      const { ...result } = user;
      return result;
    }
    return null;
  }

  // async login(user: any) {
  //   const payload = { username: user.name, sub: user.googleId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  public async findOne(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  // public async createToken() {
  //   const user: 
  // }

  public async createUser(user:
    {
    firstName: string,
    lastName: string,
    email: string,
    imageUrl: string}): Promise<User> {
    const newUser = await this.userRepository.create();
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.imageUrl = user.imageUrl;
    console.log('[Auth Service : add User] ... ', newUser);

    return this.userRepository.save(newUser);
  }
}
