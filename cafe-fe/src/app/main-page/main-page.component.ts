import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {SideBarComponent} from "./sidebar/side-bar.component";
import {UserDataComponent} from "./user-data/user-data.component";

@Component({
  standalone: true,
  selector: 'main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.scss',
  imports: [
    SideBarComponent,
    UserDataComponent
  ]
})
export class MainPageComponent {


}
