interface IUser {
  id: number;
  dni: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  userTypeId: number;
}

export class User {
  id: number;
  dni: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  birthDate: Date;
  userTypeId: number;

  constructor({ id, dni, name, lastName, email, password, birthDate, userTypeId }: IUser) {
    this.id = id;
    this.dni = dni;
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.userTypeId = userTypeId;
  }
}
