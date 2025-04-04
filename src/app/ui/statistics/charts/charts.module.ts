import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineComponent } from './line/line.component';
import { ULineComponent } from './u-line/u-line.component';


@NgModule({
  declarations: [
    HorizontalBarComponent,
    LineComponent,
    ULineComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    BrowserAnimationsModule
  ],
  exports: [
    HorizontalBarComponent,
    LineComponent,
    ULineComponent
  ]
})
export class ChartsModule { }
