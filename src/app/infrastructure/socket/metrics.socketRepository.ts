import { Injectable } from '@angular/core';
import { MetricRepository } from '../../core/sensors/repositories/metric.repository';
import { map, Observable, Subject } from 'rxjs';
import { Metric } from '../../core/sensors/domain/metric.model';
import { ConnectionWS } from './connection';
import { AirDataResponseDto } from '../../core/sensors/domain/graphics.models';
import { HttpClient } from '@angular/common/http';
import { mapAirDataResponse } from '../../core/sensors/adapters/graphics.mapper';

@Injectable({
  providedIn: 'root',
})
export class MetricSocket implements MetricRepository {
  private metricSubject = new Subject<Metric>();

  constructor(private connectionWS: ConnectionWS, private http: HttpClient) {}

  getGraphics(id_place: number): Observable<AirDataResponseDto> {
    return this.http
      .get<AirDataResponseDto>(`http://18.235.54.156/sensors/${id_place}`)
      .pipe(map((res) => mapAirDataResponse(res)));
  }

  createConnection(id_place: string) {
    const socket = this.connectionWS.getOrCreateSocket('sensor', id_place);
    localStorage.setItem('id_place', id_place);

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
