import { Injectable } from '@angular/core';
import { MetricRepository } from '../repositories/metric.repository';
import { Metric } from '../domain/metric.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMetrics {
  constructor(private m: MetricRepository) {}

  execute(): Observable<Metric> {
    return this.m.getMetrics();
  }
}
