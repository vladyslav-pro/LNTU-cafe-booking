import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {SideBarComponent} from "./sidebar/side-bar.component";
import {UserDataComponent} from "./user-data/user-data.component";
import {MapsOfTableComponent} from "./maps-of-table/maps-of-table.component";

@Component({
  standalone: true,
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.scss',
  imports: [
    SideBarComponent,
    UserDataComponent,
    MapsOfTableComponent
  ]
})
export class MainPageComponent {


}
