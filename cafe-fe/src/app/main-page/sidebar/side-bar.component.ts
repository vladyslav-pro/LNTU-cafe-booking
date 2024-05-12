import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SideBarInformationComponent} from "./side-bar-information/side-bar-information.component";
import {MatIcon} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";

@Component({
  standalone: true,
  selector: 'side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrl: 'side-bar.component.scss',
  imports: [NgOptimizedImage, RouterLink, SideBarInformationComponent, MatIcon, MatBadgeModule]
})
export class SideBarComponent {
  public badgeOverlap: boolean = true;
  public user!: 'ADMIN' | 'USER'
  public requestReservation: number = 5;

}




