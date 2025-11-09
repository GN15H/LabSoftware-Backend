import { Bay } from 'src/bays/entities/bay.entity';
import { User } from '../../users/entities/user.entity'

export class CreateAppointment {
  getAvailableResources(mechanics: User[], bays: Bay[], date: Date) {
    const mechanic = this.getAvailableMechanic(mechanics, date);
    const bay = this.getAvailableBay(bays, date);
    return { mechanic: mechanic, bay: bay }
  }

  private getAvailableMechanic(mechanics: User[], date: Date): User | null {
    let availableMechanics: User[] = []
    for (const mechanic of mechanics) {
      if (this.isMechanicAvailable(mechanic, date))
        availableMechanics.push(mechanic)
    }
    if (availableMechanics.length == 0) return null;
    return availableMechanics[0];
  }

  private isMechanicAvailable(mechanic: User, date: Date): boolean {
    if (mechanic.Appointments == undefined) return false;
    for (const appointment of mechanic.Appointments) {
      if (appointment.appointment_date.toISOString().split('T')[0] ===
        date.toISOString().split('T')[0]
      )
        return false;
    }
    return true;
  }

  private getAvailableBay(bays: Bay[], date: Date): Bay | null {
    let availableBays: Bay[] = []
    for (const bay of bays) {
      if (this.isBayAvailable(bay, date))
        availableBays.push(bay)
    }
    if (availableBays.length == 0) return null;
    return availableBays[0];
  }

  private isBayAvailable(bay: Bay, date: Date): boolean {
    if (bay.Appointments == undefined) return false;
    for (const appointment of bay.Appointments) {
      if (appointment.appointment_date.toISOString().split('T')[0] ===
        date.toISOString().split('T')[0]
      )
        return false;
    }
    return true;
  }
}
