import { IsDateString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsDateString()
  appointment_date: string;

  @IsNotEmpty()
  @IsInt()
  service: number;

  // @IsNotEmpty()
  // @IsInt()
  // @IsPositive()
  // mechanic_id: number;

  // @IsNotEmpty()
  // @IsInt()
  // @IsPositive()
  // bay_id: number;

  // @IsNotEmpty()
  // @IsInt()
  // @IsPositive()
  // appointment_state_id: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  vehicle_id: number;
}
