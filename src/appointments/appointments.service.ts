import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto, UpdateAppointmentStateDto } from './dto/update-appointment.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointment } from './domain/CreateAppointment';
import { CreateProcAndServDto } from './dto/create-proc-serv.dto';

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

    const appointment = await this.prisma.appointments.create({
      data: {
        appointment_date: new Date(createAppointmentDto.appointment_date),
        mechanic_id: resources.mechanic.id,
        bay_id: resources.bay.id,
        appointment_state_id: 2,
        vehicle_id: createAppointmentDto.vehicle_id
      }
    });
    await this.prisma.appointment_Services.create({
      data: {
        appointment_id: appointment.id,
        service_id: createAppointmentDto.service
      }
    })

    return appointment;
  }

  async createProcAndServ(id: number, body: CreateProcAndServDto) {
    const procedure = await this.prisma.appointment_Procedures.create({
      data: {
        description: body.description,
        appointment_id: id
      }
    })


    for (const supplyItem of body.supplies) {
      await this.prisma.appointment_Supplies.create({
        data: {
          supply_id: supplyItem.supply_id,
          supply_amount: supplyItem.amount,
          appointment_id: id
        }
      })
      const fetchedSupply = await this.prisma.supplies.findUnique({
        where: { id: supplyItem.supply_id }
      })
      await this.prisma.supplies.update({
        where: { id: supplyItem.supply_id },
        data: {
          amount: fetchedSupply!.amount - supplyItem.amount
        }
      })
    }
    return {
      ...procedure,
    }
  }


  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
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
    const resources = cond.getAvailableResources(mechanics, bays, new Date(updateAppointmentDto.appointment_date))
    if (resources.bay == null) return { response: "No hay bahias" }
    if (resources.mechanic == null) return { response: "No hay mecanicos" }

    return this.prisma.appointments.update({
      where: { id },
      data: {
        appointment_date: new Date(updateAppointmentDto.appointment_date)
      }
    });
  }

  accept(id: number) {
    return this.prisma.appointments.update({
      where: { id },
      data: {
        appointment_state_id: 7
      }
    })
  }

  async changeState(id: number, updateAppointmentStateDto: UpdateAppointmentStateDto) {
    const state = await this.prisma.appointment_States.findMany({
      where: { name: updateAppointmentStateDto.appointment_state }
    })

    return this.prisma.appointments.update({
      where: { id },
      data: {
        appointment_state_id: state[0].id
      }
    })
  }

  async findAll() {
    const data = await this.prisma.appointments.findMany({
      include: {
        Users: true,
        Bays: true,
        Payments: true,
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
    return data.map(d => ({
      ...d,
      // Appointment_Services:{
      //   // d.Appoin
      // }

    }))
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
        Appointment_Services: {
          include: {
            Services: true
          }
        },
        Appointment_Procedures: true,
        Payments: true,
      }
    })
    return data.map(d => (
      {
        ...d,
        Payments: d.Payments.map(p => ({
          ...p,
          total: p.total.toString()
        })),
      }
    ))
  }

  async findByMechanic(id: number) {
    const data = await this.prisma.appointments.findMany({
      where: {
        mechanic_id: { equals: id }
      },
      include: {
        Vehicles: true,
        Bays: true,
        Users: true,
        Appointment_Services: {
          include: {
            Services: true
          }
        },
        Appointment_Procedures: true,
        Payments: true,
      }
    })
    return data.map(d => (
      {
        ...d,
        Payments: d.Payments.map(p => ({
          ...p,
          total: p.total.toString()
        })),
      }
    ))
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

  async remove(id: number) {
    await this.prisma.appointment_Services.deleteMany({
      where: {
        appointment_id: id
      },
    })


    return this.prisma.appointments.delete({
      where: { id }
    });
  }
}
