import { Module } from '@nestjs/common';
import { EvidenceTypesService } from './evidence-types.service';
import { EvidenceTypesController } from './evidence-types.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EvidenceTypesController],
  providers: [EvidenceTypesService],
  exports: [EvidenceTypesService]
})
export class EvidenceTypesModule {}