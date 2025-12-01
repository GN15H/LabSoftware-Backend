import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';

@Injectable()
export class SuppliesService {
  constructor(private prisma: PrismaService) { }

  async create(createSupplyDto: CreateSupplyDto) {
    return this.prisma.supplies.create({
      data: {
        name: createSupplyDto.name,
        amount: createSupplyDto.amount,
        supplier_id: createSupplyDto.supplier_id,
        supply_type_id: createSupplyDto.supply_type_id,
        price: parseInt(createSupplyDto.price),
        min_stock: createSupplyDto.min_stock,
        active: true
      }
    })
  }


  async update(id: number, updateSupplyDto: UpdateSupplyDto) {
    return this.prisma.supplies.update({
      where: { id: id },
      data: {
        name: updateSupplyDto.name,
        amount: updateSupplyDto.amount
      }
    })
  }

  async findAll() {
    return this.prisma.supplies.findMany({
      where: {
        active: true
      },
      include: {
        Suppliers: true,
      }
    });
  }

  findOne(id: number) {
    return this.prisma.supplies.findUnique({
      where: { id: id },
      include: {
        Suppliers: true
      }
    })
  }

  async remove(id: number) {
    return this.prisma.supplies.update({
      where: { id },
      data: {
        active: false
      }
    });
  }
}
