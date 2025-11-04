import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateSupplyTypeDto } from './dto/create-supply-type.dto';
import { UpdateSupplyTypeDto } from './dto/update-supply-type.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SupplyTypesService {
  constructor(private prisma: PrismaService) {}

  async create(createSupplyTypeDto: CreateSupplyTypeDto) {
    // Verificar si ya existe un tipo de suministro con el mismo nombre
    const existingType = await this.prisma.supply_Types.findFirst({
      where: {
        name: createSupplyTypeDto.name
      }
    });

    if (existingType) {
      throw new ConflictException('Ya existe un tipo de suministro con este nombre');
    }

    return this.prisma.supply_Types.create({
      data: createSupplyTypeDto,
      include: {
        Supplies: true
      }
    });
  }

  findAll() {
    return this.prisma.supply_Types.findMany({
      include: {
        Supplies: {
          include: {
            Suppliers: true, // Incluye información del proveedor
            Appointment_Supplies: true // Incluye información de uso en citas
          }
        }
      }
    });
  }

  async findOne(id: number) {
    const supplyType = await this.prisma.supply_Types.findUnique({
      where: { id },
      include: {
        Supplies: {
          include: {
            Suppliers: true,
            Appointment_Supplies: true
          }
        }
      }
    });

    if (!supplyType) {
      throw new NotFoundException('Tipo de suministro no encontrado');
    }

    return supplyType;
  }

  async update(id: number, updateSupplyTypeDto: UpdateSupplyTypeDto) {
    // Verificar si existe el tipo de suministro
    const supplyType = await this.prisma.supply_Types.findUnique({
      where: { id }
    });

    if (!supplyType) {
      throw new NotFoundException('Tipo de suministro no encontrado');
    }

    // Si se está actualizando el nombre, verificar que no exista otro tipo con ese nombre
    if (updateSupplyTypeDto.name) {
      const existingType = await this.prisma.supply_Types.findFirst({
        where: {
          name: updateSupplyTypeDto.name,
          NOT: {
            id: id
          }
        }
      });

      if (existingType) {
        throw new ConflictException('Ya existe un tipo de suministro con este nombre');
      }
    }

    return this.prisma.supply_Types.update({
      where: { id },
      data: updateSupplyTypeDto,
      include: {
        Supplies: {
          include: {
            Suppliers: true,
            Appointment_Supplies: true
          }
        }
      }
    });
  }

  async remove(id: number) {
    // Verificar si existe el tipo de suministro
    const supplyType = await this.prisma.supply_Types.findUnique({
      where: { id },
      include: {
        Supplies: true
      }
    });

    if (!supplyType) {
      throw new NotFoundException('Tipo de suministro no encontrado');
    }

    // Verificar si hay suministros asociados a este tipo
    if (supplyType.Supplies.length > 0) {
      throw new ConflictException('No se puede eliminar un tipo de suministro que tiene suministros asociados');
    }

    return this.prisma.supply_Types.delete({
      where: { id }
    });
  }

  // Método adicional para obtener todos los suministros de un tipo específico con información de stock
  async findSuppliesByType(id: number) {
    const supplyType = await this.prisma.supply_Types.findUnique({
      where: { id },
      include: {
        Supplies: {
          include: {
            Suppliers: true,
            Appointment_Supplies: {
              select: {
                supply_amount: true // Para calcular el consumo
              }
            }
          }
        }
      }
    });

    if (!supplyType) {
      throw new NotFoundException('Tipo de suministro no encontrado');
    }

    // Aquí podrías agregar lógica para calcular el stock actual
    // basado en el consumo registrado en Appointment_Supplies
    return supplyType.Supplies;
  }

  // Método para verificar suministros con stock bajo
  async checkLowStock() {
    // Este método podría implementarse más adelante para el RF-019
    // Alertas de stock mínimo
    return this.prisma.supply_Types.findMany({
      include: {
        Supplies: {
          where: {
            // Aquí irían las condiciones para determinar stock bajo
          }
        }
      }
    });
  }
}