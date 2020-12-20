import { Repository } from 'typeorm';
import { BookDto } from './dto/book.dto';
import { BookList } from './entities/Book.entities';
import { BookPatchDto } from './dto/bookPatch.dto';
export declare class BookService {
    private readonly BookRepository;
    constructor(BookRepository: Repository<BookList>);
    findAll(limit: number): Promise<BookList[]>;
    findOutline(important?: number): Promise<BookList[]>;
    findOne(id: number): Promise<BookList>;
    createBook(bookData: BookDto): Promise<BookList>;
    updateBook(bookData: BookPatchDto): Promise<number>;
    deleteBook(id: number | string): Promise<number>;
}
