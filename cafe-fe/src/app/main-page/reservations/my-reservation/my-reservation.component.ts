import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TABLE_MOCK} from "../../../shared/mocs/table-mock";
import {TableInformation} from "../../../shared/interfaces/table-interface";
import {ReservationItemComponent} from "../reservation-item/reservation-item.component";

@Component({
  selector: 'my-reservation',
  standalone: true,
  imports: [
    ReservationItemComponent
  ],
  templateUrl: './my-reservation.component.html',
  styleUrl: './my-reservation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MyReservationComponent implements OnInit{
  protected readonly tableList = TABLE_MOCK;
  public activeTable: TableInformation[] = [];
  public userAsUSer: boolean = true

  ngOnInit() {
    this.getBookedTable();
  }

  private getBookedTable(): void {
    this.tableList.map((item:TableInformation) => {
      if (item.state) {
        this.activeTable.push(item)
      }
    })
  }
}
