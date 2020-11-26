import { Repository } from 'typeorm';
import { NewTest } from './entities/test.entity';
export declare class TestService {
    private readonly newTestRepository;
    constructor(newTestRepository: Repository<NewTest>);
    find(): Promise<any>;
<<<<<<< HEAD
=======
    create(): Promise<any>;
>>>>>>> c7f93c72c04663751a3486c27bcd5546255294c9
}
