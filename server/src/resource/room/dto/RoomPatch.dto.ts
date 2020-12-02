import {
  IsNumber, IsString, /* IsBoolean, */
} from 'class-validator';

export class RoomPatchDto {
  @IsNumber()
  roomId: number;

  @IsString()
  name: string;

  @IsString()
  createdAt: number;

  @IsString()
  price: number;

  @IsString()
  userId: string;

  @IsString()
  content: string;
}
