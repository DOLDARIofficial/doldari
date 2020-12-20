import {
  IsNumberString, IsOptional,
} from 'class-validator';

export class BookGetRequest {
  @IsNumberString()
  @IsOptional()
  id: number;
}
