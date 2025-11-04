import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VehicleTypesService {
  constructor(private prisma: PrismaService) {}

  async create(createVehicleTypeDto: CreateVehicleTypeDto) {
    // Verificar si ya existe un tipo de vehículo con el mismo nombre
    const existingType = await this.prisma.vehicle_Types.findFirst({
      where: {
        name: createVehicleTypeDto.name
      }
    });

    if (existingType) {
      throw new ConflictException('Ya existe un tipo de vehículo con este nombre');
    }

    return this.prisma.vehicle_Types.create({
      data: createVehicleTypeDto,
      include: {
        Vehicles: true // Incluye los vehículos asociados a este tipo
      }
    });
  }

  findAll() {
    return this.prisma.vehicle_Types.findMany({
      include: {
        Vehicles: true
      }
    });
  }

  async findOne(id: number) {
    const vehicleType = await this.prisma.vehicle_Types.findUnique({
      where: { id },
      include: {
        Vehicles: true
      }
    });

    if (!vehicleType) {
      throw new NotFoundException('Tipo de vehículo no encontrado');
    }

    return vehicleType;
  }

  async update(id: number, updateVehicleTypeDto: UpdateVehicleTypeDto) {
    // Verificar si existe el tipo de vehículo
    const vehicleType = await this.prisma.vehicle_Types.findUnique({
      where: { id }
    });

    if (!vehicleType) {
      throw new NotFoundException('Tipo de vehículo no encontrado');
    }

    // Si se está actualizando el nombre, verificar que no exista otro tipo con ese nombre
    if (updateVehicleTypeDto.name) {
      const existingType = await this.prisma.vehicle_Types.findFirst({
        where: {
          name: updateVehicleTypeDto.name,
          NOT: {
            id: id
          }
        }
      });

      if (existingType) {
        throw new ConflictException('Ya existe un tipo de vehículo con este nombre');
      }
    }

    return this.prisma.vehicle_Types.update({
      where: { id },
      data: updateVehicleTypeDto,
      include: {
        Vehicles: true
      }
    });
  }

  async remove(id: number) {
    // Verificar si existe el tipo de vehículo
    const vehicleType = await this.prisma.vehicle_Types.findUnique({
      where: { id },
      include: {
        Vehicles: true
      }
    });

    if (!vehicleType) {
      throw new NotFoundException('Tipo de vehículo no encontrado');
    }

    // Verificar si hay vehículos asociados a este tipo
    if (vehicleType.Vehicles.length > 0) {
      throw new ConflictException('No se puede eliminar un tipo de vehículo que tiene vehículos asociados');
    }

    return this.prisma.vehicle_Types.delete({
      where: { id }
    });
  }

  // Método adicional para obtener todos los vehículos de un tipo específico
  async findVehiclesByType(id: number) {
    const vehicleType = await this.prisma.vehicle_Types.findUnique({
      where: { id },
      include: {
        Vehicles: {
          include: {
            Users: true, // Incluye información del propietario
            Appointments: true // Incluye las citas asociadas
          }
        }
      }
    });

    if (!vehicleType) {
      throw new NotFoundException('Tipo de vehículo no encontrado');
    }

    return vehicleType.Vehicles;
  }
}