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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpacesAdminsPageComponent } from './spaces-admins-page/spaces-admins-page.component';
import { InformationSensorsComponent } from './information-sensors/information-sensors.component';
import { ModalsModule } from '../modals/modals.module';

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
    InformationSensorsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ModalsModule,
  ],
})
export class AdminsModule {}
