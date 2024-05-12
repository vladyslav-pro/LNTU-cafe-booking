import { Component } from '@angular/core';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

@Component({
  selector: 'welcome-page',
  standalone: true,
  imports: [
    LoginPageComponent,
    RegistrationPageComponent
  ],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

}
