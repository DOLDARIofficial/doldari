import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HealthDto } from './dto/health.dto';
import { HealthPatchDto } from './dto/HealthPatch.dto';
import { HealthEntity } from './entities/health.entitiy';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(HealthEntity)
    private readonly HealthRepository: Repository<HealthEntity>,

  ) {}

  /**
   * 공지사항 리스트 조회 메소드
   * @param limit optional, 가져오는 수 제한
   */
  public async findAll(limit?: number): Promise<HealthEntity[]> {
    return this.HealthRepository
      .createQueryBuilder()
      .addOrderBy('createdAt', 'DESC')
      .limit(limit)
      .getMany();
  }

  /**
   * 자취방 20개의 게시물을 올리기위한 매소드
   * @param important optional, default = 2, 조회할 중요공지 숫자
   */
  public async findOutline(important = 2): Promise<HealthEntity[]> {
    // select * from Notice where isImportant = 1 order by createdAt DESC LIMIT 2
    // select * from Notice where isImportant = 0 order by createdAt DESC LIMIT 3
    // const importantNotice = await this.noticeRepository
    //   .createQueryBuilder()
    //   .where('isImportant = 1')
    //   .orderBy('createdAt', 'DESC')
    //   .limit(important)
    //   .getMany();

    const newHealth = await this.HealthRepository
      .createQueryBuilder()
      .orderBy('createdAt')
      .limit(20)
      .getMany();

    return newHealth.concat(newHealth);
  }

  /**
   * 개별 게시물 조회 메소드
   * @param healthId 
   */
  public async findOne(healthId: number): Promise<HealthEntity> {
    return this.HealthRepository.findOne(healthId);
  }

  /**
   * 자취방 생성 메소드
   * @param healthData 생성할 데이터 HealthPatchrequest
   */
  public async createRoom(healthData: HealthDto): Promise<HealthEntity> {
    return this.HealthRepository.save(healthData);
  }

  /**
   * 개별 게시글 변경 메소드
   * @param healthData 변경할 게시글 데이터 해당 고유 id를 포함해야합니다.
   */
  public async updateRoom(healthData: HealthPatchDto): Promise<number> {
    const {
      healthId, createdAt, name, content, userId, price,
    } = healthData;
    const result = await this.HealthRepository
      .update({ healthId }, {
        createdAt, name, content, userId, price,
      });
    return result.affected;
  }

  /**
   * 개별 공지사항 글 삭제 메소드
   * @param healthId 삭제할고유 번호
   */
  public async deleteRoom(healthId: number | string): Promise<number> {
    const result = await this.HealthRepository.delete(healthId);
    return result.affected;
  }
}
