import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ReservationItemComponent} from "../../../shared/components/reservation-item/reservation-item.component";
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TABLE_MOCK} from "../../../shared/mocs/table-mock";
import {CommonModule} from "@angular/common";
import {TableInformation} from "../../../shared/interfaces/table-interface";

@Component({
  selector: 'active-reservation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReservationItemComponent,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix,
    ReactiveFormsModule
  ],
  templateUrl: './active-reservation.component.html',
  styleUrl: './active-reservation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ActiveReservationComponent implements OnInit {
  // TODO for the future? this array return from server to Administrative user
  public tableNumber:string ='';
  protected readonly tableList = TABLE_MOCK;
  public userAdmin: boolean = true;

  public activeTable: TableInformation[] = [];

  ngOnInit() {
    this.getBookedTable();
  }

  public getTableNumber(event: any) {
    console.log(event.data)
    console.log(this.tableNumber)
  }

  public onSearchClean() {
    this.tableNumber = ''
  }

  private getBookedTable(): void {
    this.tableList.map((item:TableInformation) => {
      if (item.state) {
        this.activeTable.push(item)
      }
    })
  }
}
