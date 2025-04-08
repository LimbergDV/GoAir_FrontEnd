import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameOfPlaceComponent } from './name-of-place/name-of-place.component';
import { FormsModule } from '@angular/forms';
import { ConfirmInstalationComponent } from './confirm-instalation/confirm-instalation.component';

@NgModule({
  declarations: [NameOfPlaceComponent, ConfirmInstalationComponent],
  imports: [CommonModule, FormsModule],
  exports: [NameOfPlaceComponent, ConfirmInstalationComponent],
})
export class ModalsModule {}
