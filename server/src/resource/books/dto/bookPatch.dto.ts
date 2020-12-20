import {
  IsNumber, IsString,
} from 'class-validator';

export class BookPatchDto {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  contents: string;

  @IsNumber()
  price: number;

  @IsString()
  authors: string[];

  @IsString()
  translators: string;

  @IsString()
  isbn: string;

  @IsString()
  userId: string;

  @IsString()
  publisher: string;

  @IsString()
  description: string;

  @IsString()
  state: string;
}
