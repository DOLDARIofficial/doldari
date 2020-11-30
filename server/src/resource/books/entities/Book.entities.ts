import {
  Entity, Column, PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from '../interfaces/book.interface';

  @Entity({ name: 'Book' })
export class BookList implements Book {
   @PrimaryGeneratedColumn()
   Id: number;

   @Column()
   title: string;

   @Column()
   writer: string;

   @Column()
   publisher: string;

   @Column()
   price: number;

   constructor(partial: Partial<BookList>) {
     Object.assign(this, partial);
   }

    seller: string;
}
