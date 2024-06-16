import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LogoIconComponent} from "../../shared/svg/logo-icon/logo-icon.component";
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'registration-page',
  standalone: true,
  imports: [
    MatTooltipModule,
    ReactiveFormsModule,
    LogoIconComponent,
    MatIcon
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  userRegistered: boolean = true;
  registrationForm = new FormGroup({
    'firstName' : new FormControl('', [Validators.required, Validators.minLength(2)]),
    'lastName' : new FormControl('', [Validators.required, Validators.minLength(2)]),
    'email' : new FormControl('', [Validators.required, Validators.email]),
    'password' : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    'phone' : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(13)])
  });

  constructor(
    private router: Router
  ) {
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userRegistered = !this.userRegistered;
  }

  onLoginReturn(){
    this.userRegistered = !this.userRegistered;
    this.returnToLogin();
  }

  returnToLogin(){
    this.router.navigate(['/welcome/login']);
  }


}
