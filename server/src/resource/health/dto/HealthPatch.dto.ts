import {
  IsNumber, IsString,
} from 'class-validator';

export class HealthPatchDto {
  @IsNumber()
  healthId: number;

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
