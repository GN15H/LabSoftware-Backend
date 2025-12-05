import { EvidenceType } from '../../evidence-types/entities/evidence-type.entity';
import { Appointment } from '../../appointments/entities/appointment.entity';

export class Evidence {
  id: number;
  description: string;
  file_path?: string;
  evidence_type_id: number;
  appointment_id: number;
  
  // Relations
  EvidenceType?: EvidenceType;
  Appointment?: Appointment;
}