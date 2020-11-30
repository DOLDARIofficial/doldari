import { Repository } from 'typeorm';
import { RoomDto } from './dto/room.dto';
import { RoomPatchDto } from './dto/RoomPatch.dto';
import { RoomEntity } from './entities/room.entitiy';
export declare class RoomService {
    private readonly RoomRepository;
    constructor(RoomRepository: Repository<RoomEntity>);
    findAll(limit?: number): Promise<RoomEntity[]>;
    findOutline(important?: number): Promise<RoomEntity[]>;
    findOne(roomId: number): Promise<RoomEntity>;
    createRoom(roomData: RoomDto): Promise<RoomEntity>;
    updateRoom(roomData: RoomPatchDto): Promise<number>;
    deleteRoom(roomId: number | string): Promise<number>;
}
