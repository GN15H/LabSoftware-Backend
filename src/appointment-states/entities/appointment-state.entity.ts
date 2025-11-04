import { Appointment } from '../../appointments/entities/appointment.entity';

export class AppointmentState {
    id: number;
    name: string;
    description: string;

    // Relations
    appointments?: Appointment[];
}
