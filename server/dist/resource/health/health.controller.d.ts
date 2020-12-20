import { HealthEntity } from './entities/health.entitiy';
import { Health } from './interfaces/health.interface';
import { HealthService } from './health.service';
import { HealthDto } from './dto/health.dto';
import { HealthPatchDto } from './dto/HealthPatch.dto';
export declare class HealthController {
    private readonly healthService;
    constructor(healthService: HealthService);
    findAll(limit: number): Promise<Health[]>;
    findOne(roomId: number): Promise<HealthEntity>;
    createRoom(data: HealthDto): Promise<HealthEntity>;
    updateRoom(data: HealthPatchDto): Promise<number>;
    deleteRoom(id: number): Promise<number>;
}
