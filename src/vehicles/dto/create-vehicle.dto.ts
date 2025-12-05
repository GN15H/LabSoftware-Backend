import { IsString, Length, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateVehicleDto {
    @IsString()
    @Length(1, 10)
    number_plate: string;

    @IsString()
    @Length(1, 20)
    brand: string;

    @IsOptional()
    @IsString()
    @Length(1, 20)
    series?: string;

    @IsInt()
    @IsPositive()
    vehicle_type_id: number;

    @IsInt()
    @IsPositive()
    owner_id: number;
}