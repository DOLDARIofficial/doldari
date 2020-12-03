import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from './dto/book.dto';
import { BookList } from './entities/Book.entities';
import { BookPatchDto } from './dto/bookPatch.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookList)
    private readonly BookRepository: Repository<BookList>,

  ) {}

  /**
   * 책방 리스트 조회 메소드
   * @param limit optional, 가져오는 수 제한
   */
  public async findAll(limit?: number): Promise<BookList[]> {
    return this.BookRepository
      .createQueryBuilder()
      .addOrderBy('createdAt', 'DESC')
      .limit(limit)
      .getMany();
  }

  /**
   * 책방 8개의 게시물을 올리기위한 매소드
   * @param important optional, default = 2, 조회할 중요공지 숫자
   */
  public async findOutline(important = 2): Promise<BookList[]> {
    // select * from Notice where isImportant = 1 order by createdAt DESC LIMIT 2
    // select * from Notice where isImportant = 0 order by createdAt DESC LIMIT 3
    // const importantNotice = await this.noticeRepository
    //   .createQueryBuilder()
    //   .where('isImportant = 1')
    //   .orderBy('createdAt', 'DESC')
    //   .limit(important)
    //   .getMany();

    const newBook = await this.BookRepository
      .createQueryBuilder()
      .orderBy('createdAt')
      .limit(8)
      .getMany();

    return newBook.concat(newBook);
  }

  /**
   * 개별 게시물 조회 메소드
   * @param id 공지사항 개별글 번호
   */
  public async findOne(id: number): Promise<BookList> {
    return this.BookRepository.findOne(id);
  }

  /**
   * 책방 생성 메소드
   * @param bookData 생성할 공지사항 데이터 NoticePatchRequest
   */
  public async createBook(bookData: BookDto): Promise<BookList> {
    return this.BookRepository.save(bookData);
  }

  /**
   * 개별 게시글 변경 메소드
   * @param bookData 변경할 게시글 데이터 해당 공지사항의 고유 id를 포함해야합니다.
   */
  public async updateBook(bookData: BookPatchDto): Promise<number> {
    const {
      id, title, contents, userId, price, description, isbn,
    } = bookData;
    const result = await this.BookRepository
      .update({ id }, {
        title, contents, description, price, userId, isbn,
      });
    return result.affected;
  }

  /**
   * 개별 공지사항 글 삭제 메소드
   * @param id 삭제할 공지사항의 고유 번호
   */
  public async deleteBook(id: number | string): Promise<number> {
    const result = await this.BookRepository.delete(id);
    return result.affected;
  }
}
