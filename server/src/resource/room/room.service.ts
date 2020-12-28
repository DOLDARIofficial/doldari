import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomDto } from './dto/room.dto';
import { RoomPatchDto } from './dto/RoomPatch.dto';
import { RoomEntity } from './entities/room.entitiy';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly RoomRepository: Repository<RoomEntity>,

  ) {}

  /**
   * 공지사항 리스트 조회 메소드
   * @param limit optional, 가져오는 수 제한
   */
  public async findAll(limit?: number): Promise<RoomEntity[]> {
    return this.RoomRepository
      .createQueryBuilder()
      .addOrderBy('createdAt', 'DESC')
      .limit(limit)
      .getMany();
  }

  /**
   * 자취방 20개의 게시물을 올리기위한 매소드
   * @param important optional, default = 2, 조회할 중요공지 숫자
   */
  public async findOutline(important = 2): Promise<RoomEntity[]> {
    // select * from Notice where isImportant = 1 order by createdAt DESC LIMIT 2
    // select * from Notice where isImportant = 0 order by createdAt DESC LIMIT 3
    // const importantNotice = await this.noticeRepository
    //   .createQueryBuilder()
    //   .where('isImportant = 1')
    //   .orderBy('createdAt', 'DESC')
    //   .limit(important)
    //   .getMany();

    const newRoom = await this.RoomRepository
      .createQueryBuilder()
      .orderBy('createdAt')
      .limit(20)
      .getMany();

    return newRoom.concat(newRoom);
  }

  /**
   * 개별 게시물 조회 메소드
   * @param roomId 
   */
  public async findOne(roomId: number): Promise<RoomEntity> {
    return this.RoomRepository.findOne(roomId);
  }

  /**
   * 자취방 생성 메소드
   * @param roomData 생성할 공지사항 데이터 NoticePatchRequest
   */
  public async createRoom(roomData: RoomDto): Promise<RoomEntity> {
    return this.RoomRepository.save(roomData);
  }

  /**
   * 개별 게시글 변경 메소드
   * @param roomData 변경할 게시글 데이터 해당 공지사항의 고유 id를 포함해야합니다.
   */
  public async updateRoom(roomData: RoomPatchDto): Promise<number> {
    const {
      roomId, createdAt, title, content, userId, price,
    } = roomData;
    const result = await this.RoomRepository
      .update({ roomId }, {
        createdAt, title, content, userId, price,
      });
    return result.affected;
  }

  /**
   * 개별 공지사항 글 삭제 메소드
   * @param roomId 삭제할 공지사항의 고유 번호
   */
  public async deleteRoom(roomId: number | string): Promise<number> {
    const result = await this.RoomRepository.delete(roomId);
    return result.affected;
  }
}
