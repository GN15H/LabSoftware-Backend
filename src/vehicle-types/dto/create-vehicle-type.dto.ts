import { IsString, Length } from 'class-validator';

export class CreateVehicleTypeDto {
    @IsString()
    @Length(1, 20)
    name: string;
}