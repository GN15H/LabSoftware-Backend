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
import { PaymentsModule } from './payments/payments.module';
import { SuppliesModule } from './supplies/supplies.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailerModule as MailModule } from './mailer/mailer.module';
import { EvidencesModule } from './evidences/evidences.module';
import { AppointmentSuppliesModule } from './appointment-supplies/appointment-supplies.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    UserTypesModule,
    EvidencesModule,
    ServicesModule,
    SpecialtiesModule,
    VehicleTypesModule,
    SupplyTypesModule,
    EvidencesModule,
    AppointmentSuppliesModule,
    AuthModule,
    VehiclesModule,
    AppointmentsModule,
    AppointmentStatesModule,
    SuppliesModule,
    SuppliersModule,
    ConfigModule.forRoot(),
    PaymentsModule,
    SuppliersModule,
    MailModule,
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'mandingoscrack@gmail.com',
          pass: process.env.EMAIL_SECRET,   // <-- App Password from Google
        },
      },
      defaults: {
        from: '"Autolink Manager" <managerautolink@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
      },
    }),
    MailerModule,
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
