import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserReservationComponent} from "../../../shared/svg/user-reservation/user-reservation.component";
import {MatButtonModule} from "@angular/material/button";
import {TableInformation} from "../../../shared/interfaces/table-interface";
import {LogoIconComponent} from "../../../shared/svg/logo-icon/logo-icon.component";

@Component({
  selector: 'table-item-component',
  standalone: true,
  imports: [CommonModule, UserReservationComponent, MatButtonModule, LogoIconComponent],
  templateUrl: './table-item-component.component.html',
  styleUrl: './table-item-component.component.scss',
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

  public showReservationDialog() {

  }


}
