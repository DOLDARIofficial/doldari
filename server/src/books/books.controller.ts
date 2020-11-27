import {
  Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookList } from './entities/Book.entities';

@Controller('books')
export class BooksController {
  constructor(readonly booksService: BooksService) {}

 @Get()
  async getAll(): Promise<BookList[]> {
    return this.booksService.getAll();
  }

 @Get(':id')
 async findOne(
     @Param('id', ParseIntPipe) id: number,
 ): Promise<BookList> {
   return this.booksService.findOne(id);
 }

 @Post()
 creat(@Body() bookData) {
   return this.booksService.create(bookData);
 }

 @Delete('detail')
 remove(@Param('detail') id: number) {
   return this.booksService.deleteOne(id);
 }

 @Patch('detail')
 patch(@Param('detail') id: number, @Body() updateData) {
   return this.booksService.update(id, updateData);
 }
}
