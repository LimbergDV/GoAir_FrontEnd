import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminsPagesComponent } from './login-admins-pages/login-admins-pages.component';
import { FormLoginAdminsComponent } from './form-login-admins/form-login-admins.component';



@NgModule({
  declarations: [
    LoginAdminsPagesComponent,
    FormLoginAdminsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminsModule { }
