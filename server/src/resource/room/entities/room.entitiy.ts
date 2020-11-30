import {
  Entity, Column, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from '../interfaces/room.interface';

@Entity({ name: 'Room' })
export class RoomEntity implements Room {
 @PrimaryGeneratedColumn()
 roomId: number;

 @Column()
 createdAt: number;

 @Column()
 name: string;

 @Column()
 price: number;

 @Column()
 userId: string;

 @Column()
 content: string;

 @Column()
 state: string;

 constructor(partial: Partial<RoomEntity>) {
   Object.assign(this, partial);
 }

  seller: string;
}
