import {Route, RouterModule, Routes} from '@angular/router';
import {WelcomePageRoutingModule} from "./welcome-page/welcome-page.module";
import {NgModule} from "@angular/core";

export const appRoutes: Route[] = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
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

// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
