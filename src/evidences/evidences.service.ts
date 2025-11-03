import { Injectable } from '@nestjs/common';
import { CreateEvidenceDto } from './dto/create-evidence.dto';
import { UpdateEvidenceDto } from './dto/update-evidence.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EvidencesService {
  constructor(private prisma: PrismaService) {}

  create(createEvidenceDto: CreateEvidenceDto) {
    return this.prisma.evidences.create({
      data: createEvidenceDto,
      include: {
        Evidence_Types: true,
        Appointments: true
      }
    });
  }

  findAll() {
    return this.prisma.evidences.findMany({
      include: {
        Evidence_Types: true,
        Appointments: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.evidences.findUnique({
      where: { id },
      include: {
        Evidence_Types: true,
        Appointments: true
      }
    });
  }

  update(id: number, updateEvidenceDto: UpdateEvidenceDto) {
    return this.prisma.evidences.update({
      where: { id },
      data: updateEvidenceDto,
      include: {
        Evidence_Types: true,
        Appointments: true
      }
    });
  }

  remove(id: number) {
    return this.prisma.evidences.delete({
      where: { id }
    });
  }
}