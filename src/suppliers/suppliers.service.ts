import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) { }

  async create(createSupplierDto: CreateSupplierDto) {
    return this.prisma.suppliers.create({
      data: {
        name: createSupplierDto.name,
        email: createSupplierDto.email,
        phone: createSupplierDto.phone
      }
    })
  }


  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.prisma.suppliers.update({
      where: { id: id },
      data: {
        name: updateSupplierDto.name,
        email: updateSupplierDto.email,
        phone: updateSupplierDto.phone
      }
    })
  }

  async findAll() {
    return this.prisma.suppliers.findMany({
      include: {
        Supplies: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.suppliers.findUnique({
      where: { id: id },
      include: {
        Supplies: true
      }
    })
  }

  async remove(id: number) {
    return this.prisma.suppliers.delete({
      where: { id }
    });
  }
}
