import { User } from '../../users/entities/user.entity';
import { Specialty } from '../../specialties/entities/specialty.entity';

export class MechanicSpecialty {
    id: number;
    mechanic_id: number;
    specialty_id: number;

    // Relations
    mechanic?: User;
    specialty?: Specialty;
}