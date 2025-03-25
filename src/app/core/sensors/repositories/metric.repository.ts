import { Observable } from 'rxjs';
import { Metric } from '../domain/metric.model';

export abstract class MetricRepository {
  abstract getMetrics(): Observable<Metric>;
}
