import { Component } from '@angular/core';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'welcome-page',
  standalone: true,
  imports: [
    LoginPageComponent,
    RegistrationPageComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        console.log(event);
      }
    });
  }

}
