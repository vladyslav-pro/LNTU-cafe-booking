import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {SideBarInformationComponent} from "./side-bar-information/side-bar-information.component";
import {SvgArrowComponent} from "../../shared/svg/svg-arrow/svg-arrow.component";

@Component({
  standalone: true,
  selector: 'side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrl: 'side-bar.component.scss',
  imports: [NgOptimizedImage, RouterLink, SideBarInformationComponent, SvgArrowComponent]
})
export class SideBarComponent {
  public user!: 'ADMIN' | 'USER'

}




