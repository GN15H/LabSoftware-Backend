import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { PrismaService } from 'src/prisma/prisma.service';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  constructor(/*private prisma: PrismaService*/) { }

  async create(createUserDto: CreateUserDto) {
    // const userData = new User(createUserDto.)
    // await this.prisma.users.create({
    //   data: {
    //     dni: createUserDto.dni,
    //     name: createUserDto.name,
    //     last_name: createUserDto.lastName,
    //     email: createUserDto.email,
    //     password: createUserDto.password,
    //     birth_date: createUserDto.birthDate,
    //     user_type_id: 1
    //   }
    // });

    return 'This action adds a new user';
  }

  async findAll() {
    // return await this.prisma.users.findMany();
    return 'huh';
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
