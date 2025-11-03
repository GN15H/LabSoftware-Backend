import { AppointmentService } from '../../appointment-services/entities/appointment-service.entity';

export class Service {
  id: number;
  name: string;
  
  // Relations
  Appointment_Services?: AppointmentService[];
}