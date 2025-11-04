import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VehiclesService {
  constructor(private prisma: PrismaService) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.prisma.vehicles.create({
      data: createVehicleDto,
      include: {
        Vehicle_Types: true,
        Users: true,
        Appointments: true
      }
    });
  }

  findAll() {
    return this.prisma.vehicles.findMany({
      include: {
        Vehicle_Types: true,
        Users: true,
        Appointments: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.vehicles.findUnique({
      where: { id },
      include: {
        Vehicle_Types: true,
        Users: true,
        Appointments: true
      }
    });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.prisma.vehicles.update({
      where: { id },
      data: updateVehicleDto,
      include: {
        Vehicle_Types: true,
        Users: true,
        Appointments: true
      }
    });
  }

  remove(id: number) {
    return this.prisma.vehicles.delete({
      where: { id }
    });
  }
}