import { Component, HostBinding, Input} from '@angular/core';
import {IconOptions, MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {BOOKING_ICON} from "../svg-constants";

@Component({
  selector: 'user-reservation-icon',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './user-reservation.component.html',
  styleUrl: './user-reservation.component.scss'
})
export class UserReservationComponent {
  @Input() state?: string;
  // @HostBinding('class.active') get activeClass() {
  //   if (this.state === 'ACTIVE') {
  //     return this.state;
  //   }
  // }
  // @HostBinding('class.disabled') get disabledClass() {
  //   return this.state;
  // }
  // @HostBinding('class.viewMode') get viewModeClass() {
  //   return this.state;
  // }

  boxSize: IconOptions = {
    viewBox: '0 0 200 200'
  }

  constructor(
      private iconRegistry: MatIconRegistry,
      private sanitizer: DomSanitizer,
  ) {

    iconRegistry.addSvgIconLiteral('reservation-icon', sanitizer.bypassSecurityTrustHtml(BOOKING_ICON), this.boxSize);
  }

}
