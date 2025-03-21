import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { AsideComponent } from "../shared/aside/aside.component";
import { WelcomeMessagePrincipalComponent } from './welcome-message-principal/welcome-message-principal.component';
import { CardsPrincipalComponent } from './cards-principal/cards-principal.component';



@NgModule({
  declarations: [
    PrincipalPageComponent,
    WelcomeMessagePrincipalComponent,
    CardsPrincipalComponent
  ],
  imports: [
    CommonModule,
    AsideComponent
]
})
export class PrincipalModule { }
