import { Supplier } from '../../suppliers/entities/supplier.entity';
import { SupplyType } from '../../supply-types/entities/supply-type.entity';
import { AppointmentSupply } from '../../appointment-supplies/entities/appointment-supply.entity';

export class Supply {
    id: number;
    name: string;
    description: string;
    stock: number;
    supplier_id: number;
    supply_type_id: number;
    min_stock: number;
    max_stock: number;
    unit_price: number;

    // Relations
    supplier?: Supplier;
    supplyType?: SupplyType;
    appointmentSupplies?: AppointmentSupply[];
}