/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppointmentServicesService } from './appointment-services.service';
import { AppointmentServicesController } from './appointment-services.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppointmentServicesController],
  providers: [AppointmentServicesService],
})
export class AppointmentServicesModule {}