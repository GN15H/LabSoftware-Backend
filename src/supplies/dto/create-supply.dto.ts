import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateSupplyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  amount: number;

  @IsNotEmpty()
  @IsInt()
  min_stock: number;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsInt()
  supply_type_id: number;

  @IsNotEmpty()
  @IsInt()
  supplier_id: number;
}
