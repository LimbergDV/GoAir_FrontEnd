import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminsPagesComponent } from './login-admins-pages/login-admins-pages.component';
import { FormLoginAdminsComponent } from './form-login-admins/form-login-admins.component';
import { SpacesAdminsPageComponent } from './spaces-admins-page/spaces-admins-page.component';
import { AdminsTableComponent } from './admins-table/admins-table.component';
import { FinderUsersComponent } from './finder-users/finder-users.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    LoginAdminsPagesComponent,
    FormLoginAdminsComponent,
    SpacesAdminsPageComponent,
    AdminsTableComponent,
    FinderUsersComponent,
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class AdminsModule { }
