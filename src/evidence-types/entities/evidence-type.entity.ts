import { Evidence } from '../../evidences/entities/evidence.entity';

export class EvidenceType {
  id: number;
  name: string;
  
  // Relations
  Evidences?: Evidence[];
}