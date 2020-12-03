import {
<<<<<<< HEAD
  Entity, Column, PrimaryGeneratedColumn,
=======
  Entity, Column, /* OneToOne, */PrimaryGeneratedColumn,
>>>>>>> 4d727006292331c84d80668e57c661f600b8e3b2
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
