import { VehicleType } from '../../vehicle-types/entities/vehicle-type.entity';
import { User } from '../../users/entities/user.entity';
import { Appointment } from '../../appointments/entities/appointment.entity';

export class Vehicle {
  id: number;
  number_plate: string;
  brand: string;
  series?: string;
  vehicle_type_id: number;
  owner_id: number;
  
  // Relations
  VehicleType?: VehicleType;
  Owner?: User;
  Appointments?: Appointment[];
}