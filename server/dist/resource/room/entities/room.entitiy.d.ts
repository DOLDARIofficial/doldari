import { Room } from '../interfaces/room.interface';
export declare class RoomEntity implements Room {
    roomId: number;
    createdAt: number;
    name: string;
    price: number;
    userId: string;
    content: string;
    state: string;
    constructor(partial: Partial<RoomEntity>);
    seller: string;
}
