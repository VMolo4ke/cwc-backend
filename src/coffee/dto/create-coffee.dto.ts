import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  size!: CoffeeSize;

  @IsNumber()
  @IsNotEmpty()
  price!: number;

  @IsString()
  @IsOptional()
  description?: string;
}
