export class Bay {
  id: number;
  name: string;
  
  // Relations
  Appointments?: any[]; // Will be properly typed once Appointment entity is created
}