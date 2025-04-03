import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from './ui/principal/principal-page/principal-page.component';
import { NotificationsPageComponent } from './ui/notifications/notifications-page/notifications-page.component';
import { LoginPageComponent } from './ui/login/login-page/login-page.component';
import { RegisterPageComponent } from './ui/register/register-page/register-page.component';
import { LoginAdminsPagesComponent } from './ui/admins/login-admins-pages/login-admins-pages.component';
import { SpacesAdminsPageComponent } from './ui/admins/spaces-admins-page/spaces-admins-page.component';
import { DetailsClientPageComponent } from './ui/admins/details-client-page/details-client-page.component';
import { MyPlacesPageComponent } from './ui/my-places/my-places-page/my-places-page.component';


const routes: Routes = [
  {path: "home", component: PrincipalPageComponent},
  {path: "notifications", component: NotificationsPageComponent},
  {path: "signIn", component: LoginPageComponent},
  {path: "signUp", component: RegisterPageComponent},
  {path: "signInAdmins", component: LoginAdminsPagesComponent},
  {path: "manage", component: SpacesAdminsPageComponent},
  {path: "details", component: DetailsClientPageComponent},
  {path: "myPlaces", component: MyPlacesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
