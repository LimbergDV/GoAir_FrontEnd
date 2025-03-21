import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './ui/principal/principal.module';
import { AsideComponent } from './ui/shared/aside/aside.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    AsideComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
