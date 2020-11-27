import { Injectable, NotFoundException } from '@nestjs/common';
import { BookList } from './entities/Book.entities';

@Injectable()
export class BooksService {
    private books: BookList[] = [];

    async getAll() {
      return this.books;
    }

    async findOne(id: number) {
      const book = this.books.find((book) => book.id === id);
      if (!book) {
        throw new NotFoundException(`Book with ID: ${id} not found.`);
      }
      return this.findOne(id);
    }

    deleteOne(id: number) {
      this.findOne(id);
      this.books = this.books.filter((book) => book.id !== +id);
    }

    create(bookData) {
      this.books.push({
        id: this.books.length + 1,
        ...bookData,
      });
    }

    update(id: number, updateDate) {
      const book = this.findOne(id);
      this.deleteOne(id);
      this.books.push({ ...book, ...updateDate });
    }
}
