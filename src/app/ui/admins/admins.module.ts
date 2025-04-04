import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminsPagesComponent } from './login-admins-pages/login-admins-pages.component';
import { FormLoginAdminsComponent } from './form-login-admins/form-login-admins.component';
import { AdminsTableComponent } from './admins-table/admins-table.component';
import { FinderUsersComponent } from './finder-users/finder-users.component';
import { TableModule } from 'primeng/table';
import { DetailsClientPageComponent } from './details-client-page/details-client-page.component';
import { RequestPlacesCardsComponent } from './request-places-cards/request-places-cards.component';
import { ActivePlacesCardsComponent } from './active-places-cards/active-places-cards.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpacesAdminsPageComponent } from './spaces-admins-page/spaces-admins-page.component';



@NgModule({
  declarations: [
    LoginAdminsPagesComponent,
    FormLoginAdminsComponent,
    SpacesAdminsPageComponent,
    AdminsTableComponent,
    FinderUsersComponent,
    DetailsClientPageComponent,
    RequestPlacesCardsComponent,
    ActivePlacesCardsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AdminsModule { }
