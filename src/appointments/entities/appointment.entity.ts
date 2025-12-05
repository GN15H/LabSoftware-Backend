import { AppointmentService } from '../../appointment-services/entities/appointment-service.entity';
import { AppointmentSupply } from '../../appointment-supplies/entities/appointment-supply.entity';
import { AppointmentState } from '../../appointment-states/entities/appointment-state.entity';
import { User } from '../../users/entities/user.entity';
import { Bay } from '../../bays/entities/bay.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Evidence } from '../../evidences/entities/evidence.entity';

export class Appointment {
    id: number;
    appointment_date: Date;
    mechanic_id: number;
    bay_id: number;
    appointment_state_id: number;
    vehicle_id: number;

    // Relations
    appointmentServices?: AppointmentService[];
    appointmentSupplies?: AppointmentSupply[];
    user?: User;
    bay?: Bay;
    appointmentState?: AppointmentState;
    vehicle?: Vehicle;
    evidences?: Evidence[];
}