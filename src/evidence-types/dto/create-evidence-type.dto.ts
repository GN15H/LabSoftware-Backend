import { IsString, Length } from 'class-validator';

export class CreateEvidenceTypeDto {
    @IsString()
    @Length(1, 10)
    name: string;
}