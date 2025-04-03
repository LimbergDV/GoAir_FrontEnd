import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormRegisterComponent } from './form-register/form-register.component';



@NgModule({
  declarations: [
    RegisterPageComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
