import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './ui/principal/principal.module';
import { AsideComponent } from './ui/shared/aside/aside.component';
import { NotificationsModule } from './ui/notifications/notifications.module';
import { MetricRepository } from './core/sensors/repositories/metric.repository';
import { MetricSocket } from './infrastructure/socket/metrics.socketRepository';
import { ConnectionWS } from './infrastructure/socket/connection';
import { LoginModule } from './ui/login/login.module';
import { RegisterModule } from './ui/register/register.module';
import { AdminsModule } from './ui/admins/admins.module';
import { MyPlacesModule } from './ui/my-places/my-places.module';
import { AdminRepository } from './core/admin/repositories/admin.repository';
import { AdminApi } from './infrastructure/api/admin.api';

import { UserApi } from './infrastructure/api/user.apis';
<<<<<<< HEAD
import { ApplicationRepository } from './core/applications/repositories/application.repository';
import { ApplciationApi } from './infrastructure/api/applications.api';
=======
import { UserRepository } from './core/users/repositories/user.repository';
>>>>>>> ece17e162bbdfc2789c7016446993121e0a17b09

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    AsideComponent,
    NotificationsModule,
    LoginModule,
    RegisterModule,
    AdminsModule,
    MyPlacesModule,
  ],
  providers: [
    { provide: MetricRepository, useClass: MetricSocket },
    { provide: AdminRepository, useClass: AdminApi },
    { provide: UserRepository, useClass: UserApi },
    { provide: ApplicationRepository, useClass: ApplciationApi },
  ],
  bootstrap: [AppComponent],
})
export class AppModule implements OnInit {
  constructor(private conn: ConnectionWS) {}

  ngOnInit(): void {
    
  }
}
