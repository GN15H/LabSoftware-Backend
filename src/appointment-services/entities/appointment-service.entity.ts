/* eslint-disable prettier/prettier */
import { Appointment } from '../../appointments/entities/appointment.entity';
import { Service } from '../../services/entities/service.entity';

export class AppointmentService {
    id: number;
    appointment_id: number;
    service_id: number;
    appointment?: Appointment;
    service?: Service;
}