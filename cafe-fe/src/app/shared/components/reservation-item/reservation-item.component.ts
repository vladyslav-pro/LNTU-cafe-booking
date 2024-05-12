import {Component, Input} from '@angular/core';
import {UserReservationComponent} from "../../svg/user-reservation/user-reservation.component";
import {TableInformation} from "../../interfaces/table-interface";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'reservation-item',
  standalone: true,
  imports: [
    UserReservationComponent,
    TitleCasePipe
  ],
  templateUrl: './reservation-item.component.html',
  styleUrl: './reservation-item.component.scss'
})
export class ReservationItemComponent {
  @Input() tableItem: TableInformation | undefined ;
  //after add server this input will be removed
  @Input() userAsAdmin: boolean | undefined;
  @Input() userAsUSer: boolean | undefined;

    // public userAsAdmin: boolean = true;

  public iconState = 'ACTIVE'
}
