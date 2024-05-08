import {Component, Input} from '@angular/core';
import {UserReservationComponent} from "../../../shared/svg/user-reservation/user-reservation.component";
import {TableInformation} from "../../../shared/interfaces/table-interface";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'active-reservation-item',
  standalone: true,
  imports: [
    UserReservationComponent,
    TitleCasePipe
  ],
  templateUrl: './active-reservation-item.component.html',
  styleUrl: './active-reservation-item.component.scss'
})
export class ActiveReservationItemComponent {
  @Input() tableItem: TableInformation | undefined ;

  iconState = 'ACTIVE'
}
