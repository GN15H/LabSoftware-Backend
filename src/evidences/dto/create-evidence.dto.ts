import { IsString, Length, IsInt, IsPositive } from 'class-validator';

export class CreateEvidenceDto {
    @IsString()
    @Length(1, 50)
    description: string;

    @IsInt()
    @IsPositive()
    appointment_id: number;
}
