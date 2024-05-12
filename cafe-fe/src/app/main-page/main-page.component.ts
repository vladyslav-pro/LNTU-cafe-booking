import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {SideBarComponent} from "./sidebar/side-bar.component";
import {UserDataComponent} from "./user-data/user-data.component";
import {MapsOfTableComponent} from "./maps-of-table/maps-of-table.component";
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {FormControl} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {ActiveReservationComponent} from "./reservations/active-reservation/active-reservation.component";
import {MyReservationComponent} from "./reservations/my-reservation/my-reservation.component";
import {RequestReservationComponent} from "./reservations/request-reservation/request-reservation.component";

@Component({
  standalone: true,
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.scss',
  imports: [
    SideBarComponent,
    UserDataComponent,
    MapsOfTableComponent,
    MatSidenavContainer,
    MatSidenavModule,
    MatButtonModule,
    ActiveReservationComponent,
    MyReservationComponent,
    RequestReservationComponent
  ]
})
export class MainPageComponent {


}
