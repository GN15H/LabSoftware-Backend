import { Body, Controller, Post } from "@nestjs/common";
import { AppointmentSuppliesService } from "./appointment-supplies.service";
import { CreateAppointmentSuppliesDto } from "./dto/create-appointment-supplie.dto";


@Controller('appointment-supplies')
export class AppointmentSuppliesController {
  constructor(private readonly service: AppointmentSuppliesService) { }

  @Post()
  create(@Body() data: CreateAppointmentSuppliesDto) {
    return this.service.create(data);
  }
}
