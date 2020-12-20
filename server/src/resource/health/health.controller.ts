import {
  Body,
  ClassSerializerInterceptor,
  Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors, ValidationPipe,
} from '@nestjs/common';
import { HealthEntity } from './entities/health.entitiy';
import { Health } from './interfaces/health.interface';
import { HealthService } from './health.service';
import { HealthDto } from './dto/health.dto';
import { HealthPatchDto } from './dto/HealthPatch.dto';
// import {RoomGet} from './dto/RoomGet.dto';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async findAll(
    @Query('limit') limit: number,
  ): Promise<Health[]> {
    return this.healthService.findAll(limit);
  }

  // @Get('outline')
  // async findForDashboard(
  //   @Query('important', ParseIntPipe)
  // ): Promise<RoomEntity[]> {
  //   return this.roomService.findOutline();
  // }

  @Get('/:id')
  async findOne(
    @Param('healthId', ParseIntPipe) roomId: number,
  ): Promise<HealthEntity> {
    return this.healthService.findOne(roomId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async createRoom(
    @Body() data: HealthDto,
  ): Promise<HealthEntity> {
    console.log(data);
    return this.healthService.createRoom(data);
  }

  @Patch()
  async updateRoom(
    @Body(ValidationPipe) data: HealthPatchDto,
  ): Promise<number> {
    // Return affected rows. 1을 반환받았다면 1개의 개시글이 변경된 것.
    return this.healthService.updateRoom(data);
  }

  @Delete()
  async deleteRoom(
    @Body('id', ParseIntPipe) id: number,
  ): Promise<number> {
    return this.healthService.deleteRoom(id);
  }
}
