import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
 @PrimaryGeneratedColumn()
 firstName: string;

 @Column()
 lastName: string;

 @Column()
 imageUrl: string;

 @Column()
 email: string;
}
