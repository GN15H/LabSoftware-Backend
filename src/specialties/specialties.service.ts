import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SpecialtiesService {
  constructor(private prisma: PrismaService) {}

  async create(createSpecialtyDto: CreateSpecialtyDto) {
    // Verificar si ya existe una especialidad con el mismo nombre
    const existingSpecialty = await this.prisma.specialties.findFirst({
      where: {
        name: createSpecialtyDto.name
      }
    });

    if (existingSpecialty) {
      throw new ConflictException('Ya existe una especialidad con este nombre');
    }

    return this.prisma.specialties.create({
      data: createSpecialtyDto,
      include: {
        Mechanics_Specialties: {
          include: {
            Users: true // Incluye información de los mecánicos
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.specialties.findMany({
      include: {
        Mechanics_Specialties: {
          include: {
            Users: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    const specialty = await this.prisma.specialties.findUnique({
      where: { id },
      include: {
        Mechanics_Specialties: {
          include: {
            Users: true
          }
        }
      }
    });

    if (!specialty) {
      throw new NotFoundException('Especialidad no encontrada');
    }

    return specialty;
  }

  async update(id: number, updateSpecialtyDto: UpdateSpecialtyDto) {
    // Verificar si existe la especialidad
    const specialty = await this.prisma.specialties.findUnique({
      where: { id }
    });

    if (!specialty) {
      throw new NotFoundException('Especialidad no encontrada');
    }

    // Si se está actualizando el nombre, verificar que no exista otra especialidad con ese nombre
    if (updateSpecialtyDto.name) {
      const existingSpecialty = await this.prisma.specialties.findFirst({
        where: {
          name: updateSpecialtyDto.name,
          NOT: {
            id: id
          }
        }
      });

      if (existingSpecialty) {
        throw new ConflictException('Ya existe una especialidad con este nombre');
      }
    }

    return this.prisma.specialties.update({
      where: { id },
      data: updateSpecialtyDto,
      include: {
        Mechanics_Specialties: {
          include: {
            Users: true
          }
        }
      }
    });
  }

  async remove(id: number) {
    // Verificar si existe la especialidad
    const specialty = await this.prisma.specialties.findUnique({
      where: { id },
      include: {
        Mechanics_Specialties: true
      }
    });

    if (!specialty) {
      throw new NotFoundException('Especialidad no encontrada');
    }

    // Verificar si hay mecánicos asignados a esta especialidad
    if (specialty.Mechanics_Specialties.length > 0) {
      throw new ConflictException('No se puede eliminar una especialidad que tiene mecánicos asignados');
    }

    return this.prisma.specialties.delete({
      where: { id }
    });
  }

  // Método adicional para obtener mecánicos por especialidad
  async findMechanicsBySpecialty(id: number) {
    const specialty = await this.prisma.specialties.findUnique({
      where: { id },
      include: {
        Mechanics_Specialties: {
          include: {
            Users: true
          }
        }
      }
    });

    if (!specialty) {
      throw new NotFoundException('Especialidad no encontrada');
    }

    return specialty.Mechanics_Specialties.map(ms => ms.Users);
  }
}