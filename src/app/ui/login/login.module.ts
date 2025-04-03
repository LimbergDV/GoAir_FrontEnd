import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormLoginComponent } from './form-login/form-login.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    FormLoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
