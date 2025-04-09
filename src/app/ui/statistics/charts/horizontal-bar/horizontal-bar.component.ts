import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import { AirQualityAvgDto } from '../../../../core/sensors/domain/graphics.models';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css'],
})
export class HorizontalBarComponent implements OnChanges {
  @Input() airq!: AirQualityAvgDto[];
  data: any;
  options: any;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['airq'] && this.airq && this.airq.length > 0) {
      this.initChart();
    }
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor =
        documentStyle.getPropertyValue('--p-text-color') || '#fff';
      const textColorSecondary =
        documentStyle.getPropertyValue('--p-text-muted-color') || '#fff';
      const surfaceBorder =
        documentStyle.getPropertyValue('--p-content-border-color') || '#fff';

      const labels = this.airq.map((t) => t.Fecha);
      const dataValues = this.airq.map((t) => t.Promedio_calidad_aire);
      //promedio de 5
      this.data = {
        labels: labels,
        datasets: [
          {
            label: 'Calidad de aire en los últimos tres días',
            backgroundColor: 'rgba(123, 176, 246, 0.5)',
            borderColor: 'rgb(121, 63, 63)',
            data: dataValues,
          },
        ],
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500,
              },
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false,
            },
          },
        },
      };

      this.cd.markForCheck();
    }
  }
}
