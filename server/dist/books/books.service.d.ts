import { BookList } from './entities/Book.entities';
export declare class BooksService {
    private books;
    getAll(): Promise<BookList[]>;
    findOne(id: number): any;
    deleteOne(id: number): void;
    create(bookData: any): void;
    update(id: number, updateDate: any): void;
}
