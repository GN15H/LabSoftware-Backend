import { IsArray, IsNotEmpty, IsNumber } from "class-validator";

class AppointmentSuppliesDto {

  @IsNotEmpty()
  @IsNumber()
  supply_id: number

  @IsNotEmpty()
  @IsNumber()
  appointment_id: number

  @IsNotEmpty()
  @IsNumber()
  supply_amount: number
}

export class CreateAppointmentSuppliesDto {
  @IsNotEmpty()
  @IsArray()
  supplies: AppointmentSuppliesDto[]
}
