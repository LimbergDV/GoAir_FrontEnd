import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './ui/principal/principal-page/principal-page.component';
import { NotificationsPageComponent } from './ui/notifications/notifications-page/notifications-page.component';
import { LoginPageComponent } from './ui/login/login-page/login-page.component';
import { RegisterPageComponent } from './ui/register/register-page/register-page.component';


const routes: Routes = [
  {path: "home", component: PrincipalPageComponent},
  {path: "notifications", component: NotificationsPageComponent},
  {path: "signIn", component: LoginPageComponent},
  {path: "signUp", component: RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
