import {Component, OnInit} from '@angular/core';
import {TABLE_MOCK} from "../../../shared/mocs/table-mock";
import {TableInformation} from "../../../shared/interfaces/table-interface";
import {ReservationItemComponent} from "../reservation-item/reservation-item.component";

@Component({
  selector: 'request-reservation',
  standalone: true,
  imports: [
    ReservationItemComponent
  ],
  templateUrl: './request-reservation.component.html',
  styleUrl: './request-reservation.component.scss'
})
export class RequestReservationComponent implements OnInit{
  protected readonly tableList = TABLE_MOCK;
  public activeTable: TableInformation[] = [];
  userAsUser: boolean = true;
  ngOnInit() {
    this.getBookedTable();
  }
  private getBookedTable(): void {
    this.tableList.map((item:TableInformation) => {
      if (item.requestedUserState === 'PENDING') {
        this.activeTable.push(item)
      }
    })
  }


}
