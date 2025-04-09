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
import { Temperature24Dto } from '../../../../core/sensors/domain/graphics.models';

@Component({
  selector: 'app-u-line',
  templateUrl: './u-line.component.html',
  styleUrl: './u-line.component.css',
})
export class ULineComponent implements OnChanges {
  @Input() tem24!: Temperature24Dto[];

  data: any;
  options: any;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tem24'] && this.tem24 && this.tem24.length > 0) {
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

      const labels = this.tem24.map((t) => t.Hora);
      const dataValues = this.tem24.map((t) => t.Temperatura_promedio);

      this.data = {
        labels: labels,
        datasets: [
          {
            label: 'Temperarura en las últimas 24 horas',
            data: dataValues,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
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
