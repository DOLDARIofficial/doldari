import {
  Entity, Column, PrimaryGeneratedColumn,
} from 'typeorm';
import { Book } from '../interfaces/book.interface';

/*
* 책정보를 저장하기위한 books entity
* 책정보는 kakao 검색 open api를 통해 가져온다.
* 요청시 받게되는 데이터와함께, id값으로 책 게시물을 관리한다.
********************************************************************************************************************
* open api로 받게되는데이터 :
* title : 책제목, contents: 책 소개, url: 책 정보 daum주소, isbn : 국제표준 도서번호 (ISBN10혹은 ISBN13둘중하나이상, ''공백으로구분됨)
* datetime: 도서출판일([YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].000+[tz]), author : 도서저자, publisher: 출판사, translators
* price: 도서 정가, thumbnail : 도서표지 미리보기 url
********************************************************************************************************************
* 이외의 entity값 : 
* id : 책 게시글의 id
* createdAt : 게시글이 올라간 날짜의 id
* userId : 게시글 작성자의 id
* description : 게시글 작성자가 쓴 게시글에대한 설명
*/
  @Entity({ name: 'Book' })
export class BookList implements Book {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   title: string;

   @Column()
   contents: string;

   @Column()
   url: string;

   @Column()
   isbn: string;

   @Column()
   datetime: string;

   @Column()
   authors: string;

   @Column()
   publisher: string;

   @Column()
   translators: string;

   @Column()
   price: number;

   @Column()
   thumbnail: string;

   @Column()
   description: string;

   @Column()
   createdAt: string;

   @Column()
   userId: string;

   @Column()
   state: string;

   constructor(partial: Partial<BookList>) {
     Object.assign(this, partial);
   }
}
