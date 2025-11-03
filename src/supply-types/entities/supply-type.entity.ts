import { Supply } from '../../supplies/entities/supply.entity';

export class SupplyType {
  id: number;
  name: string;
  
  // Relations
  Supplies?: Supply[]; // Suministros que pertenecen a este tipo
}