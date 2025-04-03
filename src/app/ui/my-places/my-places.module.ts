import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPlacesPageComponent } from './my-places-page/my-places-page.component';
import { MyPlacesCardsComponent } from './my-places-cards/my-places-cards.component';
import { PlacesInProcessCardsComponent } from './places-in-process-cards/places-in-process-cards.component';



@NgModule({
  declarations: [
    MyPlacesPageComponent,
    MyPlacesCardsComponent,
    PlacesInProcessCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyPlacesModule { }
