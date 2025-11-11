import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentsService {

  constructor(private service: PrismaService) { }

  async create(createPaymentDto: CreatePaymentDto) {
    console.log("chicos??");
    const payment = await this.service.payments.create({
      data: {
        total: BigInt(createPaymentDto.total),
        date: new Date(createPaymentDto.date),
        method: createPaymentDto.method,
        appointment_id: createPaymentDto.appointment_id
      }
    });
    await this.service.appointments.update({
      where: { id: createPaymentDto.appointment_id },
      data: {
        appointment_state_id: 6
      }
    })

    return {
      ...payment,
      total: payment.total.toString()
    }
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
