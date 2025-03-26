import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './ui/principal/principal-page/principal-page.component';
import { NotificationsPageComponent } from './ui/notifications/notifications-page/notifications-page.component';
import { LoginPageComponent } from './ui/login/login-page/login-page.component';


const routes: Routes = [
  {path: "home", component: PrincipalPageComponent},
  {path: "notifications", component: NotificationsPageComponent},
  {path: "login", component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
