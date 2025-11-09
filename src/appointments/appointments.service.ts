import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointment } from './domain/CreateAppointment';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) { }

  async create(createAppointmentDto: CreateAppointmentDto) {
    const mechanics = await this.prisma.users.findMany({
      where: {
        user_type_id: {
          equals: 2
        }
      },
      include: {
        Appointments: true
      }
    })
    const bays = await this.prisma.bays.findMany({
      include: {
        Appointments: true
      }
    })
    const cond = new CreateAppointment();
    const resources = cond.getAvailableResources(mechanics, bays, new Date(createAppointmentDto.appointment_date))
    if (resources.bay == null) return "No hay bahias"
    if (resources.mechanic == null) return "No hay mecanicos"

    return this.prisma.appointments.create({
      data: {
        // ...createAppointmentDto,
        // appointment_date: new Date(createAppointmentDto.appointment_date)
        appointment_date: new Date(createAppointmentDto.appointment_date),
        mechanic_id: resources.mechanic.id,
        bay_id: resources.bay.id,
        appointment_state_id: 2,
        vehicle_id: createAppointmentDto.vehicle_id
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

  async findByUser(id: number) {
    const data = await this.prisma.appointments.findMany({
      where: {
        Vehicles: {
          owner_id: {
            equals: id
          }
        }
      },
      include: {
        Vehicles: true,
        Bays: true,
        Users: true,
        Appointment_Services: true,
        Appointment_Procedures: true,
      }
    })
    return data;
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
