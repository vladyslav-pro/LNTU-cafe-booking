import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

@Component({
  standalone: true,
  imports: [RouterModule, MainPageComponent, WelcomePageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
