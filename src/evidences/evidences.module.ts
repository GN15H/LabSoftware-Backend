import { Module } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { EvidencesController } from './evidences.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  imports: [PrismaModule, MailerModule],
  controllers: [EvidencesController],
  providers: [EvidencesService],
  exports: [EvidencesService]
})
export class EvidencesModule { }
