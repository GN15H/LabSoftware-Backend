import { Module } from '@nestjs/common';
import { UserTypesService } from './user_types.service';
import { UserTypesController } from './user_types.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserTypesController],
  providers: [UserTypesService],
  imports: [PrismaModule]
})
export class UserTypesModule { }
