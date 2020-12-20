import { AuthService } from './auth.service';
import { userDto } from './dto/user.dto';
import { User } from './entities/testUser.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    googleAuth(req: any): Promise<void>;
    googleAuthCallback(req: any): Promise<string>;
    createUser(user: userDto): Promise<User>;
}
