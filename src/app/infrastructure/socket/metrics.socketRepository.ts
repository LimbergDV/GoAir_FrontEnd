import { Injectable } from '@angular/core';
import { MetricRepository } from '../../core/sensors/repositories/metric.repository';
import { Observable, Subject } from 'rxjs';
import { Metric } from '../../core/sensors/domain/metric.model';
import { ConnectionWS } from './connection';

@Injectable({
  providedIn: 'root',
})
export class MetricSocket implements MetricRepository {
  private metricSubject = new Subject<Metric>();

  constructor(private conn: ConnectionWS) {
    const socket = this.conn.getSocket();

    socket.onmessage = (event) => {
      console.log(event.data);

      try {
        const metric = JSON.parse(event.data) as Metric;
        this.metricSubject.next(metric);
      } catch (error) {
        console.error('Error al parsear el mensaje:', error);
      }
      
    };
  }

  getMetrics(): Observable<Metric> {
    return this.metricSubject.asObservable();
  }
}
