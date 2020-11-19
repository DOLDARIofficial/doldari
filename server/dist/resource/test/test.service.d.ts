import { Repository } from 'typeorm';
import { NewTest } from './entities/test.entity';
export declare class TestService {
    private readonly newTestRepository;
    constructor(newTestRepository: Repository<NewTest>);
    find(): Promise<any>;
    create(): Promise<any>;
}
