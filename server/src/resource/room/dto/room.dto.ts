import {
  IsNumber, IsString, /* IsBoolean, */
} from 'class-validator';

export class RoomDto {
  @IsNumber()
  roomId: number;

  @IsString()
  title: string;

  @IsString()
  createdAt: string;

  @IsString()
  price: number;

  @IsString()
  userId: string;

  @IsString()
  content: string;

  @IsString()
  state: string;
}
