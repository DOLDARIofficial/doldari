import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(readonly booksService: BooksService) {}

 @Get()
 getAll() {
        return this.booksService.getAll();
    }

 @Get(':id')
 async findOne(
     @Param('id',ParseIntPipe) id: number,) {
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
