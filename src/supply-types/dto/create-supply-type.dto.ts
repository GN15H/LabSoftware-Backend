import { IsString, Length } from 'class-validator';

export class CreateSupplyTypeDto {
    @IsString()
    @Length(1, 20)
    name: string;
}