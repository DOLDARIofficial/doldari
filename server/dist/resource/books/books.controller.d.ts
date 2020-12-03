import { BookList } from './entities/Book.entities';
import { BookService } from './books.service';
import { BookDto } from './dto/book.dto';
import { BookPatchDto } from './dto/bookPatch.dto';
import { Book } from './interfaces/book.interface';
export declare class BookController {
    readonly bookService: BookService;
    constructor(bookService: BookService);
    getAll(limit: number): Promise<Book[]>;
    findOne(bookId: number): Promise<BookList>;
    createBook(data: BookDto): Promise<BookList>;
    updateBook(data: BookPatchDto): Promise<number>;
    deleteBook(id: number): Promise<number>;
}
