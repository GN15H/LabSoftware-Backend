import { PartialType } from '@nestjs/mapped-types';
import { CreateEvidenceTypeDto } from './create-evidence-type.dto';

export class UpdateEvidenceTypeDto extends PartialType(CreateEvidenceTypeDto) {}