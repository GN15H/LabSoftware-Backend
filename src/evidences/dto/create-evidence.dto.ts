import { IsString, Length, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CreateEvidenceDto {
    @IsString()
    @Length(1, 50)
    description: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    file_path?: string;

    @IsInt()
    @IsPositive()
    evidence_type_id: number;

    @IsInt()
    @IsPositive()
    appointment_id: number;
}