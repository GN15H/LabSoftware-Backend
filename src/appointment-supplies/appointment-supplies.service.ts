import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAppointmentSuppliesDto } from "./dto/create-appointment-supplie.dto";
import { MailerService } from "src/mailer/mailer.service";



@Injectable()
export class AppointmentSuppliesService {
  constructor(private prisma: PrismaService, private mailer: MailerService) { }

  async create(data: CreateAppointmentSuppliesDto) {
    let appointmentSupplies: { id: number, supply_id: number, appointment_id: number, supply_amount: number }[] = []
    for (const supply of data.supplies) {
      const appointmentSupply = await this.prisma.appointment_Supplies.create({
        data: supply
      })
      appointmentSupplies.push(appointmentSupply)
    }

    let updatedSupplies: { id: number, amount: number, min_stock: number, name: string }[] = [];

    for (const appointmentSupply of appointmentSupplies) {
      const updatedSupply = await this.prisma.supplies.update({
        where: { id: appointmentSupply.supply_id },
        data: {
          amount: {
            decrement: appointmentSupply.supply_amount
          }
        }
      })
      updatedSupplies.push(updatedSupply);
    }
    const filteredSupplies = updatedSupplies.filter(s => s.amount <= s.min_stock);
    if (filteredSupplies.length > 0) {
      await this.mailer.notifySupplyStock(filteredSupplies.map(s => s.name));
    }
    return appointmentSupplies;
  }

}
