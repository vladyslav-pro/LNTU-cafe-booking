export interface TableInformation {
  tableNumber: number;
  state: boolean;
  mainUser: string;
  mainUserState?: string ;
  requestedUser: string;
  requestedUserState?:string;
  dateOfBooking: string;
  bookedPeriod?: string;
}
