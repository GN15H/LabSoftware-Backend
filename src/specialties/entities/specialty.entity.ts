import { MechanicSpecialty } from '../../mechanics-specialties/entities/mechanic-specialty.entity';

export class Specialty {
  id: number;
  name: string;
  
  // Relations
  Mechanics_Specialties?: MechanicSpecialty[]; // Relación con los mecánicos que tienen esta especialidad
}