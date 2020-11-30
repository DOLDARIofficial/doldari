import { BooksService } from './books.service';
import { BookList } from './entities/Book.entities';
export declare class BooksController {
    readonly booksService: BooksService;
    constructor(booksService: BooksService);
    getAll(): Promise<BookList[]>;
    findOne(id: number): Promise<BookList>;
    creat(bookData: any): void;
    remove(id: number): void;
    patch(id: number, updateData: any): void;
}
