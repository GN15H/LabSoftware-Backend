import { IsDateString, IsInt, IsPositive } from 'class-validator';

export class CreateAppointmentDto {
    @IsDateString()
    appointment_date: string;

    @IsInt()
    @IsPositive()
    mechanic_id: number;

    @IsInt()
    @IsPositive()
    bay_id: number;

    @IsInt()
    @IsPositive()
    appointment_state_id: number;

    @IsInt()
    @IsPositive()
    vehicle_id: number;
}