import { Repository } from 'typeorm';
import { User } from './entities/testUser.entity';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validateUser(username: string): Promise<any>;
    findOne(id: number): Promise<User>;
    createUser(user: {
        firstName: string;
        lastName: string;
        email: string;
        imageUrl: string;
    }): Promise<User>;
}
