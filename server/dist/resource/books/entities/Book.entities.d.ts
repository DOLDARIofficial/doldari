import { Book } from '../interfaces/book.interface';
export declare class BookList implements Book {
    Id: number;
    title: string;
    writer: string;
    publisher: string;
    price: number;
    constructor(partial: Partial<BookList>);
    seller: string;
}
