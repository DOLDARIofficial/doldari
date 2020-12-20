import {
<<<<<<< HEAD
  IsNumber, IsString,
=======
  IsNumber, IsString, /* IsBoolean, */
>>>>>>> 8bf49a05f1f4e2166dbd7078a0a05039458af9dc
} from 'class-validator';

export class RoomDto {
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

  @IsString()
  state: string;
}
