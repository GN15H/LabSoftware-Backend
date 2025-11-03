import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  create(createAppointmentDto: CreateAppointmentDto) {
    return this.prisma.appointments.create({
      data: {
        ...createAppointmentDto,
        appointment_date: new Date(createAppointmentDto.appointment_date)
      }
    });
  }

  findAll() {
    return this.prisma.appointments.findMany({
      include: {
        Users: true,
        Bays: true,
        Appointment_States: true,
        Vehicles: true,
        Appointment_Services: {
          include: {
            Services: true
          }
        },
        Appointment_Supplies: {
          include: {
            Supplies: true
          }
        }
      }
    });
  }

  findOne(id: number) {
    return this.prisma.appointments.findUnique({
      where: { id },
      include: {
        Users: true,
        Bays: true,
        Appointment_States: true,
        Vehicles: true,
        Appointment_Services: {
          include: {
            Services: true
          }
        },
        Appointment_Supplies: {
          include: {
            Supplies: true
          }
        }
      }
    });
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return this.prisma.appointments.update({
      where: { id },
      data: {
        ...updateAppointmentDto,
        appointment_date: updateAppointmentDto.appointment_date ? 
          new Date(updateAppointmentDto.appointment_date) : undefined
      }
    });
  }

  remove(id: number) {
    return this.prisma.appointments.delete({
      where: { id }
    });
  }
}