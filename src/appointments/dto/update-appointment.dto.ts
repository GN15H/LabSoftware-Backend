import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateAppointmentDto {
  @IsNotEmpty()
  @IsDateString()
  appointment_date: string;

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
}

export class UpdateAppointmentStateDto {
  @IsNotEmpty()
  @IsString()
  appointment_state: string;
}
