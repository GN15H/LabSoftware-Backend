import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupplyTypesService } from './supply-types.service';
import { CreateSupplyTypeDto } from './dto/create-supply-type.dto';
import { UpdateSupplyTypeDto } from './dto/update-supply-type.dto';

@Controller('supply-types')
export class SupplyTypesController {
  constructor(private readonly supplyTypesService: SupplyTypesService) {}

  @Post()
  create(@Body() createSupplyTypeDto: CreateSupplyTypeDto) {
    return this.supplyTypesService.create(createSupplyTypeDto);
  }

  @Get()
  findAll() {
    return this.supplyTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplyTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplyTypeDto: UpdateSupplyTypeDto,
  ) {
    return this.supplyTypesService.update(+id, updateSupplyTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplyTypesService.remove(+id);
  }

  @Get(':id/supplies')
  findSuppliesByType(@Param('id') id: string) {
    return this.supplyTypesService.findSuppliesByType(+id);
  }

  @Get('check/low-stock')
  checkLowStock() {
    return this.supplyTypesService.checkLowStock();
  }
}