import { Component } from '@angular/core';
import {IconOptions, MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {ICON_LOGO} from "../svg-constants";

@Component({
  selector: 'logo-icon',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './logo-icon.component.html',
  styleUrl: './logo-icon.component.scss'
})
export class LogoIconComponent {
  // TODO add color for icon depends on state

//   width="412" height="449" viewBox="0 0 412 449" fill="none"
  boxSize:IconOptions = {
    viewBox: '0 0 412 449'
  }
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
     iconRegistry.addSvgIconLiteral('logo-icon', sanitizer.bypassSecurityTrustHtml(ICON_LOGO), this.boxSize);
  }


}
