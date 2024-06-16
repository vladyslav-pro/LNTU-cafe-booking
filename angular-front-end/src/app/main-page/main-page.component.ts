import {Component} from "@angular/core";
import {SideBarComponent} from "./sidebar/side-bar.component";
import {UserDataComponent} from "./user-data/user-data.component";
import {MapsOfTableComponent} from "./maps-of-table/maps-of-table.component";
import {MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {ActiveReservationComponent} from "./reservations/active-reservation/active-reservation.component";
import {MyReservationComponent} from "./reservations/my-reservation/my-reservation.component";
import {RequestReservationComponent} from "./reservations/request-reservation/request-reservation.component";
import {RouterOutlet} from "@angular/router";

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
    RequestReservationComponent,
    RouterOutlet
  ]
})
export class MainPageComponent {


}
