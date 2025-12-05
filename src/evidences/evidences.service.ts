import { Injectable } from '@nestjs/common';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvidencesService {
  constructor(private prisma: PrismaService) { }

  async create(createEvidenceDto: CreateEvidenceDto, url: string) {
    return await this.prisma.evidences.create({
      data: {
        ...createEvidenceDto,
        evidence_type_id: 1,
        file_path: url
      },
    });
  }
}
