import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {LogoIconComponent} from "../../shared/svg/logo-icon/logo-icon.component";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatButtonModule,
    LogoIconComponent,
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent {
  // TODO add validators
  loginForm = new FormGroup({
     'email' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(16)])
  });

  constructor(
    private router: Router,
  ) {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}