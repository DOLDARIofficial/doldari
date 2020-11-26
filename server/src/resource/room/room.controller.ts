import {
  Body,
  ClassSerializerInterceptor,
  Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseInterceptors, ValidationPipe,
} from '@nestjs/common';
import { RoomEntity } from './entities/room.entitiy';
import { Room } from './interfaces/room.interface';
import { RoomService } from './room.service';
import { RoomDto } from './dto/room.dto';
// import {RoomGet} from './dto/RoomGet.dto';
import { RoomPatchDto } from './dto/RoomPatch.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  async findAll(
    @Query('limit') limit: number,
  ): Promise<Room[]> {
    return this.roomService.findAll(limit);
  }

  // @Get('outline')
  // async findForDashboard(
  //   @Query('important', ParseIntPipe)
  // ): Promise<RoomEntity[]> {
  //   return this.roomService.findOutline();
  // }

  @Get('/:id')
  async findOne(
    @Param('roomId', ParseIntPipe) roomId: number,
  ): Promise<RoomEntity> {
    return this.roomService.findOne(roomId);
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async createRoom(
    @Body() data: RoomDto,
  ): Promise<RoomEntity> {
    console.log(data);
    return this.roomService.createRoom(data);
  }

  @Patch()
  async updateRoom(
    @Body(ValidationPipe) data: RoomPatchDto,
  ): Promise<number> {
    // Return affected rows. 1을 반환받았다면 1개의 공지사항이 변경된 것.
    return this.roomService.updateRoom(data);
  }

  @Delete()
  async deleteRoom(
    @Body('id', ParseIntPipe) id: number,
  ): Promise<number> {
    return this.roomService.deleteRoom(id);
  }
}
