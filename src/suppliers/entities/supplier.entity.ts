import { Supply } from '../../supplies/entities/supply.entity';

export class Supplier {
    id: number;
    name: string;
    contact_info: string;
    address: string;
    phone: string;
    email: string;

    // Relations
    supplies?: Supply[];
}