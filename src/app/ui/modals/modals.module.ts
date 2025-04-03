import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameOfPlaceComponent } from './name-of-place/name-of-place.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NameOfPlaceComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class ModalsModule { }
