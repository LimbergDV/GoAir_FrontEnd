import { Component, OnInit } from '@angular/core';
import { MetricSocket } from '../../../infrastructure/socket/metrics.socketRepository';
import { Metric } from '../../../core/sensors/domain/metric.model';

@Component({
  selector: 'app-cards-principal',
  templateUrl: './cards-principal.component.html',
  styleUrl: './cards-principal.component.css',
})
export class CardsPrincipalComponent implements OnInit {
  metics = new Metric(['','',''], 0, 0, 0,'','', 0);
  constructor(private serviceMetrics: MetricSocket) {}

  ngOnInit(): void {
    this.serviceMetrics.getMetrics().subscribe({
      next: (data) => {
        //console.log(data);
        this.metics = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
