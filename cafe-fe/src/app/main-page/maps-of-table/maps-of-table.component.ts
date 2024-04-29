import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table-component/table-component.component";
import {TABLE_MOCK} from "../../shared/mocs/table-mock";
import {TableInformation} from "../../shared/interfaces/table-interface";

@Component({
  selector: 'maps-of-table',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './maps-of-table.component.html',
  styleUrl: './maps-of-table.component.scss',
})
export class MapsOfTableComponent {
  public tableList:TableInformation[]  = TABLE_MOCK
}
