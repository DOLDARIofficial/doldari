import { Repository } from 'typeorm';
import { HealthDto } from './dto/health.dto';
import { HealthPatchDto } from './dto/HealthPatch.dto';
import { HealthEntity } from './entities/health.entitiy';
export declare class HealthService {
    private readonly HealthRepository;
    constructor(HealthRepository: Repository<HealthEntity>);
    findAll(limit?: number): Promise<HealthEntity[]>;
    findOutline(important?: number): Promise<HealthEntity[]>;
    findOne(healthId: number): Promise<HealthEntity>;
    createRoom(healthData: HealthDto): Promise<HealthEntity>;
    updateRoom(healthData: HealthPatchDto): Promise<number>;
    deleteRoom(healthId: number | string): Promise<number>;
}
