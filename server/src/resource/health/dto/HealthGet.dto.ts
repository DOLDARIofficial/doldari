import {
  IsNumberString, IsOptional,
} from 'class-validator';

export class HealthGetDto {
  @IsNumberString()
  @IsOptional()
  healthId: number;
}
