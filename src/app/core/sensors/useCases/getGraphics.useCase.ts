import { Injectable } from '@angular/core';
import { MetricRepository } from '../repositories/metric.repository';
import { Observable } from 'rxjs';
import { AirDataResponseDto } from '../domain/graphics.models';

@Injectable({
  providedIn: 'root',
})
export class GetGraphics {
  constructor(private mr: MetricRepository) {}

  execute(id_place: number): Observable<AirDataResponseDto> {
    return this.mr.getGraphics(id_place);
  }
}
