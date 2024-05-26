import {Component, EventEmitter, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from "./table-component/table-item-component.component";
import {TABLE_MOCK} from "../../shared/mocs/table-mock";
import {TableInformation} from "../../shared/interfaces/table-interface";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'maps-of-table',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormField,
    MatIcon
  ],
  templateUrl: './maps-of-table.component.html',
  styleUrl: './maps-of-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MapsOfTableComponent {
  // TODO add table filtering ask server about this I think
  public tableList:TableInformation[]  = TABLE_MOCK;
  public tableNumber:string ='';

  public getTableNumber(event: any) {
    console.log(event.data)
    console.log(this.tableNumber)
  }

  public onSearchClean() {
    this.tableNumber = ''
  }
}
