import {
  IsNumber, IsString, /* IsBoolean, */
} from 'class-validator';

export class HealthDto {
  @IsNumber()
  healthId: number;

  @IsString()
  name: string;

  @IsString()
  title: string;

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
