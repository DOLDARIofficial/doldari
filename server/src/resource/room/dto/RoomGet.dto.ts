import {
  IsNumberString, IsOptional,
} from 'class-validator';

export class RoomGetRequest {
  @IsNumberString()
  @IsOptional()
  roomId: number;
}
