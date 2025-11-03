import { IsString, Length } from 'class-validator';

export class CreateSpecialtyDto {
    @IsString()
    @Length(1, 20)
    name: string;
}