import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameOfPlaceComponent } from './name-of-place/name-of-place.component';
import { FormsModule } from '@angular/forms';
import { InformationPlaceSensorsComponent } from './information-place-sensors/information-place-sensors.component';
import { ConfirmInstalationComponent } from './confirm-instalation/confirm-instalation.component';

@NgModule({
  declarations: [
    NameOfPlaceComponent,
    InformationPlaceSensorsComponent,
    ConfirmInstalationComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    NameOfPlaceComponent,
    InformationPlaceSensorsComponent,
    ConfirmInstalationComponent,
  ],
})
export class ModalsModule {}
