import {Route, RouterModule, Routes} from '@angular/router';
import {WelcomePageRoutingModule} from "./welcome-page/welcome-page.module";
import {MainPageRoutingModule} from "./main-page/main-page.module";
export const appRoutes: Route[] = [
  {path: '', redirectTo: '/welcome/login', pathMatch: 'full'},
  {path: 'welcome',
    loadChildren: () => import('./welcome-page/welcome-page.module')
      .then(m => m.WelcomePageRoutingModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main-page/main-page.module')
      .then(m => m.MainPageRoutingModule)
  }
];

