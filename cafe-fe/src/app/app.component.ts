import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";

@Component({
  standalone: true,
  imports: [ RouterModule, MainPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
