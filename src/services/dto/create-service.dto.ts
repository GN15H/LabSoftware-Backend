import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateServiceDto {
    @IsString()
    @Length(1, 30)
    name: string;

    @IsString()
    @IsNotEmpty()
    price: string;
}
