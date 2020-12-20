import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookList } from './entities/Book.entities';
import { BookController } from './books.controller';
import { BookService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookList])],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
