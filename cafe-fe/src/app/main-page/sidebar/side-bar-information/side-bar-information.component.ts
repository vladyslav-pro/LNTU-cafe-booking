import {Component, OnInit} from "@angular/core";
import {DatePipe} from "@angular/common";
import {UserReservationComponent} from "../../../shared/svg/user-reservation/user-reservation.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'side-bar-information',
  templateUrl: 'side-bar-information.component.html',
  styleUrl: 'side-bar-information.component.scss',
  imports: [
    DatePipe,
    UserReservationComponent,
    MatIcon,
  ]
})
export class SideBarInformationComponent implements OnInit {
  public viewMode: string = 'VIEW'
  public userReservationInformation = {
    timeOfReservation: '1 hour. 20 min. 30 sec.',
    date: new Date(),
    timeEnd: '10:10',
    guest: 'Some user',
    bookedTable: 'Table 7'
  }

  ngOnInit() {
    this.getLocalDate()
  }
  //TODO this code will be on server side
  private getLocalDate():string {
    const kievDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      timeZone: 'Europe/Kiev',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    console.log(kievDate)
    return kievDate;

  }

}
