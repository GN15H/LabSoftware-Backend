import { Supply } from "src/supplies/entities/supply.entity";


export class Supplier {
  id: number;
  name: string;
  email: string;
  phone: string;
  active: boolean;

  //relations
  supplies?: Supply[];
}
