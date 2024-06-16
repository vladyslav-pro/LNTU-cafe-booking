import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomePageComponent} from "./welcome-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

const routes: Routes = [{
  path: '',
  component: WelcomePageComponent,
  children:[
    {path: 'login', component: LoginPageComponent},
    {path: 'registration', component: RegistrationPageComponent    }
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WelcomePageRoutingModule{}
