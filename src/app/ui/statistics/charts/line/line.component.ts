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
import {
  AirQuality24Dto,
  Humidity24Dto,
} from '../../../../core/sensors/domain/graphics.models';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnChanges {
  @Input() airq24!: AirQuality24Dto[];
  @Input() humi24!: Humidity24Dto[];

  data: any;
  options: any;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['airq24'] && this.airq24 && this.airq24.length > 0) {
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

      const labelsa = this.airq24.map((t) => t.Hora);
      const dataValuesa = this.airq24.map((t) => t.Calidad_promedio);
      const dataValuesh = this.humi24.map((t) => t.Humedad_promedio);

      this.data = {
        labels: labelsa,
        datasets: [
          {
            label: 'Calidad de aire en las últimas 24 horas',
            data: dataValuesa,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            tension: 0.4,
          },
          {
            label: 'Humedad en las últimas 24 horas',
            data: dataValuesh,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-gray-500'),
            tension: 0.4,
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
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
