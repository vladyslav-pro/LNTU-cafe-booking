import {Component, Input, ViewEncapsulation} from '@angular/core';
import {UserReservationComponent} from "../../../shared/svg/user-reservation/user-reservation.component";
import {TableInformation} from "../../../shared/interfaces/table-interface";
import {TitleCasePipe} from "@angular/common";
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'reservation-item',
  standalone: true,
  imports: [
    UserReservationComponent,
    TitleCasePipe,
    MatButtonModule,
    MatButton
  ],
  templateUrl: './reservation-item.component.html',
  styleUrl: './reservation-item.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class ReservationItemComponent {
  @Input() tableItem: TableInformation | undefined ;
  //after add routing server this input will be removed
  @Input() activeReservationTab: boolean | undefined;
  @Input() myReservationTab: boolean | undefined;
  @Input() requestReservationTab: boolean | undefined;

    // public userAsAdmin: boolean = true;

  public iconState = 'ACTIVE'

  public canselMeeting() {

  }

  public acceptMeeting() {

  }
}
