/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserTypesModule } from './user_types/user_types.module';
import { ServicesModule } from './services/services.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { VehicleTypesModule } from './vehicle-types/vehicle-types.module';
import { SupplyTypesModule } from './supply-types/supply-types.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { VehiclesModule } from './vehicles/vehicles.module';
import { AppointmentStatesModule } from './appointment-states/appointment-states.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UserTypesModule,
    ServicesModule,
    SpecialtiesModule,
    VehicleTypesModule,
    SupplyTypesModule,
    AuthModule,
    VehiclesModule,
    AppointmentsModule,
    AppointmentStatesModule,
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ],
})
export class AppModule { }
