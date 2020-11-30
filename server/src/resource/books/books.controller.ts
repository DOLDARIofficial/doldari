// import {
//   Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query,

// } from '@nestjs/common';
// import BookList from './entities/Book.entities';
// import { BooksService } from './books.service';
// import Book from './interfaces/book.interface';
// @Controller('books')
// export class BooksController {
//   constructor(readonly booksService: BooksService) {}

//  @Get()
//   getAll() {
//     return this.booksService.getAll();
//   }

//  @Get(':id')
//  async findOne: Promise<BookList>(
//      @Param('id', ParseIntPipe) id: number,
//  ) {
//    return this.booksService.findOne(id);
//  }

// @Post()

// @Delete('detail')
// @Param('detail')): Promise<BookList> {
//    return this.booksService.deleteOne(id);
//  }

//  @Patch('detail')
//  patch( @Body() updateData: any): Promise<BookList> {
//    return this.booksService.update(id, updateData);
//  }
// }
