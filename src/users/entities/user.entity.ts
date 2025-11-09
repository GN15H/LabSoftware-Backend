import { Appointment } from "src/appointments/entities/appointment.entity";

interface IUser {
  id: number;
  dni: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  userTypeId: number;
  Appointments?: Appointment[];
}

export class User {
  id: number;
  dni: string;
  name: string;
  last_name: string;
  email: string;
  password: string;
  birth_date: Date;
  user_type_id: number;
  Appointments?: Appointment[]

  constructor({ id, dni, name, Appointments, lastName, email, password, birthDate, userTypeId }: IUser) {
    this.id = id;
    this.dni = dni;
    this.name = name;
    this.last_name = lastName;
    this.email = email;
    this.password = password;
    this.birth_date = birthDate;
    this.user_type_id = userTypeId;
    this.Appointments = Appointments;
  }
}
