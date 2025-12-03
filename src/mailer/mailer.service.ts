import { Injectable } from '@nestjs/common';
import { MailerService as Mailer } from '@nestjs-modules/mailer';
import { Appointment } from 'src/appointments/entities/appointment.entity';

@Injectable()
export class MailerService {
  constructor(private readonly mailerService: Mailer) { }
  public async example(to: string) {
    return this.mailerService
      .sendMail({
        to: to, // list of receivers
        from: 'noreply@autolink.com', // sender address
        subject: 'Enviar', // Subject line
        text: 'welcome', // plaintext body
        html: '<b>welcome</b>', // HTML body content
      })
      .then(() => { })
      .catch(() => { });
  }

  public async notifyAppointmentStateChante(to: string, vehicle: string) {
    const body = `El servicio de su ${vehicle}  ha avanzado`
    return this.mailerService
      .sendMail({
        to: to, // list of receivers
        from: 'noreply@autolink.com', // sender address
        subject: 'Avance en servicio', // Subject line
        text: body, // plaintext body
        html: `<b>${body}</b>`, // HTML body content
      })
      .then(() => { })
      .catch(() => { });
  }

  public async notifySupplyStock(supplies: string[]) {
    let suppliesText = '';
    supplies.forEach((s, i) => {
      suppliesText += `${s}`
      if (i < supplies.length - 1)
        suppliesText += ','
      suppliesText += ' '
    })
    let message = '';
    if (supplies.length > 1) {

      message = `ALERTA: Los repuestos ${suppliesText} llegaron a su stock mínimo`;
    }
    else {
      message = `ALERTA: El repuesto ${suppliesText} llegó a su stock mínimo`;
    }
    return this.mailerService
      .sendMail({
        to: process.env.ADMIN_EMAIL, // list of receivers
        from: 'noreply@autolink.com', // sender address
        subject: 'Alerta stock mínimo', // Subject line
        text: message, // plaintext body
        html: `<b>${message}</b>`, // HTML body content
      })
      .then(() => { })
      .catch(() => { });
  }

}
