/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentServiceDto } from './dto/create-appointment-service.dto';
import { UpdateAppointmentServiceDto } from './dto/update-appointment-service.dto';

@Injectable()
export class AppointmentServicesService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentServiceDto: CreateAppointmentServiceDto) {
    return this.prisma.appointment_Services.create({
      data: createAppointmentServiceDto,
    });
  }

  findAll() {
    return this.prisma.appointment_Services.findMany({
      include: {
        Appointments: true,
        Services: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.appointment_Services.findUnique({
      where: { id },
      include: {
        Appointments: true,
        Services: true,
      },
    });
  }

  update(id: number, updateAppointmentServiceDto: UpdateAppointmentServiceDto) {
    return this.prisma.appointment_Services.update({
      where: { id },
      data: updateAppointmentServiceDto,
    });
  }

  remove(id: number) {
    return this.prisma.appointment_Services.delete({
      where: { id },
    });
  }
}