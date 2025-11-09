import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AppointmentStatesController } from './appointment-states.controller';
import { AppointmentStatesService } from './appointment-states.service';

@Module({
  imports: [PrismaModule],
  controllers: [AppointmentStatesController],
  providers: [AppointmentStatesService],
  exports: [AppointmentStatesService]
})
export class AppointmentStatesModule { }
