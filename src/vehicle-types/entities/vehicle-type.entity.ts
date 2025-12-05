import { Vehicle } from '../../vehicles/entities/vehicle.entity';

export class VehicleType {
  id: number;
  name: string;
  
  // Relations
  Vehicles?: Vehicle[]; // Vehículos que pertenecen a este tipo
}