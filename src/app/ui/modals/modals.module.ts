import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameOfPlaceComponent } from './name-of-place/name-of-place.component';
import { FormsModule } from '@angular/forms';
import { InformationPlaceSensorsComponent } from './information-place-sensors/information-place-sensors.component';



@NgModule({
  declarations: [
    NameOfPlaceComponent,
    InformationPlaceSensorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class ModalsModule { }
