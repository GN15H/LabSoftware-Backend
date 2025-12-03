import { Module } from '@nestjs/common';
import { EvidencesService } from './evidences.service';
import { EvidencesController } from './evidences.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  controllers: [EvidencesController],
  providers: [EvidencesService],
  exports: [EvidencesService]
})
export class EvidencesModule { }
