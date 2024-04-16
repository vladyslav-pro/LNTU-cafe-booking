import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SideBarInformationComponent} from "./side-bar-information/side-bar-information.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrl: 'side-bar.component.scss',
  imports: [NgOptimizedImage, RouterLink, SideBarInformationComponent, MatIcon]
})
export class SideBarComponent {
  public user!: 'ADMIN' | 'USER'

}




