import {
  Body, Controller, Delete, Get,
  ParseIntPipe, Patch, Post, Param,
  ClassSerializerInterceptor, UseInterceptors,
  ValidationPipe, Query,

} from '@nestjs/common';
import { BookList } from './entities/Book.entities';
import { BookService } from './books.service';
import { BookDto } from './dto/book.dto';
import { BookPatchDto } from './dto/bookPatch.dto';
import { Book } from './interfaces/book.interface';
@Controller('books')
export class BookController {
  constructor(readonly bookService: BookService) {}

 @Get()
  getAll(@Query('limit') limit: number): Promise<Book[]> {
    return this.bookService.findAll(limit);
  }

  @Get('/:id')
 async findOne(
    @Param('id', ParseIntPipe) bookId: number,
 ): Promise<BookList> {
   return this.bookService.findOne(bookId);
 }

 @Post()
 @UseInterceptors(ClassSerializerInterceptor)
  async createBook(
   @Body() data: BookDto,
  ): Promise<BookList> {
    console.log(data);
    return this.bookService.createBook(data);
  }

  @Patch()
 async updateBook(
    @Body(ValidationPipe) data: BookPatchDto,
 ): Promise<number> {
   // Return affected rows. 1을 반환받았다면 1개의 공지사항이 변경된 것.
   return this.bookService.updateBook(data);
 }

  @Delete()
  async deleteBook(
    @Body('id', ParseIntPipe) id: number,
  ): Promise<number> {
    return this.bookService.deleteBook(id);
  }
}
