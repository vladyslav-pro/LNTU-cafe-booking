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
  @Input() tableInformation!: TableInformation ;

  public tableState!:'ЗАБРОНЮВАТИ' | 'ЗАБРОНЬОВАНО' ;
  public active: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.setButtonLabel()
  }

  setButtonLabel():void {
    if (this.tableInformation.state) {
      this.tableState = 'ЗАБРОНЬОВАНО'
    } else {
      this.tableState ='ЗАБРОНЮВАТИ'
    }

  }


}
