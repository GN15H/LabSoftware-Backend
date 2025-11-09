import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentStatesService {
  constructor(private prisma: PrismaService) { }


  async findAll() {
    return this.prisma.appointment_States.findMany();
  }

  async findOne(id: number) {
    return this.prisma.appointment_States.findUnique({
      where: { id },
    });
  }

}
