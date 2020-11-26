import { BooksService } from './books.service';
export declare class BooksController {
    readonly booksService: BooksService;
    constructor(booksService: BooksService);
    getAll(): Promise<import("./entities/Book.entities").BookList[]>;
    findOne(id: number): Promise<any>;
    creat(bookData: any): void;
    remove(id: number): void;
    patch(id: number, updateData: any): void;
}
