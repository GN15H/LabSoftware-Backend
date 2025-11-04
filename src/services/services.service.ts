import { Injectable, ConflictException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    // Verificar si ya existe un servicio con el mismo nombre
    const existingService = await this.prisma.services.findFirst({
      where: {
        name: createServiceDto.name
      }
    });

    if (existingService) {
      throw new ConflictException('Ya existe un servicio con este nombre');
    }

    return this.prisma.services.create({
      data: createServiceDto,
      include: {
        Appointment_Services: {
          include: {
            Appointments: true
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.services.findMany({
      include: {
        Appointment_Services: {
          include: {
            Appointments: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    return this.prisma.services.findUnique({
      where: { id },
      include: {
        Appointment_Services: {
          include: {
            Appointments: true
          }
        }
      }
    });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    // Si se está actualizando el nombre, verificar que no exista otro servicio con ese nombre
    if (updateServiceDto.name) {
      const existingService = await this.prisma.services.findFirst({
        where: {
          name: updateServiceDto.name,
          NOT: {
            id: id
          }
        }
      });

      if (existingService) {
        throw new ConflictException('Ya existe un servicio con este nombre');
      }
    }

    return this.prisma.services.update({
      where: { id },
      data: updateServiceDto,
      include: {
        Appointment_Services: {
          include: {
            Appointments: true
          }
        }
      }
    });
  }

  async remove(id: number) {
    // Verificar si el servicio está siendo utilizado en alguna cita
    const serviceInUse = await this.prisma.appointment_Services.findFirst({
      where: {
        service_id: id
      }
    });

    if (serviceInUse) {
      throw new ConflictException('No se puede eliminar un servicio que está siendo utilizado en citas');
    }

    return this.prisma.services.delete({
      where: { id }
    });
  }
}