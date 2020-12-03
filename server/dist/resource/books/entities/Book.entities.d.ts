import { Book } from '../interfaces/book.interface';
export declare class BookList implements Book {
    id: number;
    title: string;
    contents: string;
    url: string;
    isbn: string;
    datetime: string;
    authors: string;
    publisher: string;
    translators: string;
    price: number;
    thumbnail: string;
    description: string;
    createdAt: string;
    userId: string;
    state: string;
    constructor(partial: Partial<BookList>);
}
