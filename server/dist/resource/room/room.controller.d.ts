import { RoomEntity } from './entities/room.entitiy';
import { Room } from './interfaces/room.interface';
import { RoomService } from './room.service';
import { RoomDto } from './dto/room.dto';
import { RoomPatchDto } from './dto/RoomPatch.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    findAll(limit: number): Promise<Room[]>;
    findOne(roomId: number): Promise<RoomEntity>;
    createRoom(data: RoomDto): Promise<RoomEntity>;
    updateRoom(data: RoomPatchDto): Promise<number>;
    deleteRoom(id: number): Promise<number>;
}
