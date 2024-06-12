import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {ActiveReservationComponent, MyReservationComponent, RequestReservationComponent} from "./reservations";
import {UserDataComponent} from "./user-data/user-data.component";
import {MapsOfTableComponent} from "./maps-of-table/maps-of-table.component";
import {NgModule} from "@angular/core";

const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [
    {path: 'request-reservation', component: RequestReservationComponent},
    {path: 'my-reservation', component: MyReservationComponent},
    {path: 'active-reservation', component: ActiveReservationComponent},
    {path: 'user-data', component: UserDataComponent},
    {path: 'maps-of-table', component: MapsOfTableComponent}
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainPageRoutingModule{}
