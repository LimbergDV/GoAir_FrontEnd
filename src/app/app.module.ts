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
import { ModalsModule } from './ui/modals/modals.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrincipalModule, AsideComponent, NotificationsModule, LoginModule, RegisterModule, AdminsModule, MyPlacesModule, ModalsModule],
  providers: [{ provide: MetricRepository, useClass: MetricSocket }],
  bootstrap: [AppComponent],

})
export class AppModule implements OnInit {
  constructor(private conn: ConnectionWS) {}

  ngOnInit(): void {
    this.conn.connection();
  }
}
