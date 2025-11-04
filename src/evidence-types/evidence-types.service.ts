import { Injectable } from '@nestjs/common';
import { CreateEvidenceTypeDto } from './dto/create-evidence-type.dto';
import { UpdateEvidenceTypeDto } from './dto/update-evidence-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvidenceTypesService {
  constructor(private prisma: PrismaService) {}

  create(createEvidenceTypeDto: CreateEvidenceTypeDto) {
    return this.prisma.evidence_Types.create({
      data: createEvidenceTypeDto
    });
  }

  findAll() {
    return this.prisma.evidence_Types.findMany({
      include: {
        Evidences: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.evidence_Types.findUnique({
      where: { id },
      include: {
        Evidences: true
      }
    });
  }

  update(id: number, updateEvidenceTypeDto: UpdateEvidenceTypeDto) {
    return this.prisma.evidence_Types.update({
      where: { id },
      data: updateEvidenceTypeDto
    });
  }

  remove(id: number) {
    return this.prisma.evidence_Types.delete({
      where: { id }
    });
  }
}