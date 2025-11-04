import { Module } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { EvidencesController } from './evidences.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EvidencesController],
  providers: [EvidencesService],
  exports: [EvidencesService]
})
export class EvidencesModule {}