import { Book } from '../interfaces/book.interface';
export declare class BookList implements Book {
    id: number;
    contents: string;
    title: string;
    url: string;
    isbn: number;
    datetime: string;
    authors: string;
    publisher: string;
    translators: string;
    price: number;
    sale_price: number;
    thumbnail: string;
    description: string;
    createdAt: string;
    userId: string;
    state: string;
    constructor(partial: Partial<BookList>);
}
