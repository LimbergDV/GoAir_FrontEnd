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

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PrincipalModule, AsideComponent, NotificationsModule],
  providers: [{ provide: MetricRepository, useClass: MetricSocket }],
  bootstrap: [AppComponent],
  
})
export class AppModule implements OnInit {
  constructor(private conn: ConnectionWS) {}

  ngOnInit(): void {
    this.conn.connection();
  }
}
