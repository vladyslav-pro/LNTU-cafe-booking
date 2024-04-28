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
  @Input() active?: boolean;
  @HostBinding('class.active') get activeClass() {
    return this.active;
  }
  @Input() disabled?: boolean;
  @HostBinding('class.disabled') get disabledClass() {
    return this.disabled;
  }
  @Input() viewMode?: boolean;
  @HostBinding('class.viewMode') get viewModeClass() {
    return this.viewMode;
  }

  boxSize: IconOptions = {
    viewBox: '0 0 200 200'
  }

  constructor(
      private iconRegistry: MatIconRegistry,
      private sanitizer: DomSanitizer,
  ) {

    iconRegistry.addSvgIconLiteral('booking-icon', sanitizer.bypassSecurityTrustHtml(BOOKING_ICON), this.boxSize);
  }

}
