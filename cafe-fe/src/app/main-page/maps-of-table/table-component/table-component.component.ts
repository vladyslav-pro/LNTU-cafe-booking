import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserReservationComponent} from "../../../shared/svg/user-reservation/user-reservation.component";
import {MatButtonModule} from "@angular/material/button";
import {TableInformation} from "../../../shared/interfaces/table-interface";

@Component({
  selector: 'table-component',
  standalone: true,
  imports: [CommonModule, UserReservationComponent, MatButtonModule],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.scss',
})
export class TableComponent implements OnInit{
  @Input() tableInformation: TableInformation | undefined ;

  public tableState:'ЗАБРОНЮВАТИ' | 'ЗАБРОНЬОВАНО' = 'ЗАБРОНЮВАТИ';
  public iconState: string = '';

  constructor() {
  }

  ngOnInit() {
    this.setButtonLabel()
  }

  private setButtonLabel():void {
    if (this.tableInformation?.state) {
      this.tableState = 'ЗАБРОНЬОВАНО';
      this.iconState = 'DISABLE';
    } else {
      this.tableState ='ЗАБРОНЮВАТИ';
      this.iconState = 'ACTIVE';
    }
  }


}
