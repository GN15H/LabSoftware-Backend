import { IsArray, IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateProcAndServDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  supplies: SupplyItemDto[];
}

class SupplyItemDto {
  @IsNotEmpty()
  @IsInt()
  supply_id: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  amount: number;
}
