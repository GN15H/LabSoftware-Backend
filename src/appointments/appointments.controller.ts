import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto, UpdateAppointmentStateDto } from './dto/update-appointment.dto';
import { CreateProcAndServDto } from './dto/create-proc-serv.dto';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) { }

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto) {
    return this.appointmentsService.create(createAppointmentDto);
  }

  @Post('procedures-services/:id')
  createProceduresAndServices(@Param('id') id: string, @Body() createProceduresAndServices: CreateProcAndServDto) {
    return this.appointmentsService.createProcAndServ(+id, createProceduresAndServices);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentsService.findOne(+id);
  }

  @Get('accept/:id')
  accept(@Param('id') id: string) {
    return this.appointmentsService.accept(+id);
  }

  @Patch('change-state/:id')
  changeState(@Param('id') id: string, @Body() updateAppointmentStateDto: UpdateAppointmentStateDto) {
    // return this.appointmentsService.changeState(+id, updateAppointmentStateDto);
    return this.appointmentsService.changeState(+id, updateAppointmentStateDto);
  }

  @Get('user/:id')
  getByUser(@Param('id') id: string) {
    return this.appointmentsService.findByUser(+id);
  }

  @Get('mechanic/:id')
  getByMechanic(@Param('id') id: string) {
    return this.appointmentsService.findByMechanic(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentsService.update(+id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentsService.remove(+id);
  }
}
