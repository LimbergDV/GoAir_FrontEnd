import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormRegisterComponent } from './form-register/form-register.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterPageComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ]
})
export class RegisterModule { }
