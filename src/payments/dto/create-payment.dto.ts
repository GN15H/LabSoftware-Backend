import { IsDateString, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreatePaymentDto {

  @IsString()
  @IsNotEmpty()
  total: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  method: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  appointment_id: number;
}
