import { Injectable } from '@nestjs/common';
import { CreateUserTypeDto } from './dto/create-user_type.dto';
import { UpdateUserTypeDto } from './dto/update-user_type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserTypesService {
  constructor(private prisma: PrismaService) { }

  async create(createUserTypeDto: CreateUserTypeDto) {
    await this.prisma.user_Types.create(createUserTypeDto);
    return 'This action adds a new userType';
  }

  async findAll() {
    return await this.prisma.user_Types.findMany();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} userType`;
    return await this.prisma.user_Types.findUnique({ where: { id: id } });
  }

  update(id: number, updateUserTypeDto: UpdateUserTypeDto) {
    return `This action updates a #${id} userType`;
  }

  remove(id: number) {
    return `This action removes a #${id} userType`;
  }
}
