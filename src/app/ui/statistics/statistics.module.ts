import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsContainerComponent } from './statistics-container/statistics-container.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { ChartsModule } from './charts/charts.module';



@NgModule({
  declarations: [
    StatisticsContainerComponent,
    StatisticsPageComponent,
    
    
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class StatisticsModule { }
