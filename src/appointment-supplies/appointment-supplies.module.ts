import { PrismaModule } from "src/prisma/prisma.module";
import { AppointmentSuppliesController } from "./appointment-supplies.controller";
import { AppointmentSuppliesService } from "./appointment-supplies.service";
import { Module } from "@nestjs/common";
import { MailerModule } from "src/mailer/mailer.module";

@Module({
  controllers: [AppointmentSuppliesController],
  providers: [AppointmentSuppliesService],
  imports: [PrismaModule, MailerModule],
  exports: [AppointmentSuppliesService]
})
export class AppointmentSuppliesModule { }
