import { Module } from '@nestjs/common';
import { SupplyTypesService } from './supply-types.service';
import { SupplyTypesController } from './supply-types.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SupplyTypesController],
  providers: [SupplyTypesService],
  exports: [SupplyTypesService],
})
export class SupplyTypesModule {}