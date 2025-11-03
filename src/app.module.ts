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

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UserTypesModule,
    ServicesModule,
    SpecialtiesModule,
    VehicleTypesModule,
    SupplyTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
