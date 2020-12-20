import {
  Entity, Column, PrimaryGeneratedColumn,
} from 'typeorm';
import { Health } from '../interfaces/health.interface';

@Entity({ name: 'Health' })
export class HealthEntity implements Health {
 @PrimaryGeneratedColumn()
 healthId: number;

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

 constructor(partial: Partial<HealthEntity>) {
   Object.assign(this, partial);
 }
  seller: string;
}
