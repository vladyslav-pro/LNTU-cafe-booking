export interface TableInformation {
  tableNumber: number;
  state: boolean;
  mainUser: string;
  mainUserState: string ;
  requestedUser: string;
  requestedUserPosition:string;
  requestedUserState?: 'ACCEPTED' | 'PENDING' | 'DECLINE';
  dateOfBooking: string;
  bookedPeriod?: string;
}
