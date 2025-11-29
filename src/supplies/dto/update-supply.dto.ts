import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class UpdateSupplyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  amount: number;
}
