import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar',
  templateUrl: './horizontal-bar.component.html',
  styleUrls: ['./horizontal-bar.component.css']
})

export class HorizontalBarComponent implements OnInit {
  data: any;
  options: any;

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color') || '#fff';
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color') || '#fff';
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color') || '#fff';
//promedio de 5
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May',],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: 'rgba(123, 176, 246, 0.5)',
            borderColor: 'rgb(121, 63, 63)',
            data: [65, 59, 80, 81, 56]
          }
        ]
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
