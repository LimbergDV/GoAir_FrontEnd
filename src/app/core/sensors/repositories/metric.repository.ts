import { Observable } from 'rxjs';
import { Metric } from '../domain/metric.model';
import { AirDataResponseDto } from '../domain/graphics.models';

export abstract class MetricRepository {
  abstract getMetrics(): Observable<Metric>;
  abstract getGraphics(id_place: number): Observable<AirDataResponseDto>;
}
