import { Supply } from '../../supplies/entities/supply.entity';
import { Appointment } from '../../appointments/entities/appointment.entity';

export class AppointmentSupply {
  id: number;
  supply_amount: number;
  supply_id: number;
  appointment_id: number;
  
  // Relations
  Supply?: Supply;
  Appointment?: Appointment;
}