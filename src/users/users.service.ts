/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    const createdUser = await this.prisma.users.create({
      data: {
        dni: createUserDto.dni,
        name: createUserDto.name,
        last_name: createUserDto.lastName,
        email: createUserDto.email,
        password: createUserDto.password,
        birth_date: createUserDto.birthDate,
        user_type_id: 3
      }
    });

    return createdUser;
  }

  async findAll() {
    return await this.prisma.users.findMany();
    // return 'huh';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string): Promise<User | null> {
    // email;
    // return new User({ id: 1, dni: "s", name: "name", lastName: "joder", email: "hermano", birthDate: new Date(), userTypeId: 1, password: 'jiji' });
    const user = await this.prisma.users.findUnique({
      where: {
        email: email
      }
    })
    return user != null ? new User({
      id: user.id,
      dni: user.dni,
      name: user.name,
      lastName: user.last_name,
      email: user.email,
      password: user.password,
      birthDate: user.birth_date,
      userTypeId: user.user_type_id
    }) : null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
