import { Repository } from 'typeorm';
import { TestUser } from './entities/testUser.entity';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<TestUser>);
    addUser(user: {
        id: string;
        pw: string;
        email: string;
    }): Promise<boolean>;
}
