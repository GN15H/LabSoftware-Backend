import { MailerService } from './mailer.service';
import { Module } from '@nestjs/common';

@Module({
  exports: [MailerService],
  providers: [MailerService]
})
export class MailerModule { }
