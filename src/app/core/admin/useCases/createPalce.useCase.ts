import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Place } from '../domain/place.model';
import { Observable } from 'rxjs';
import { NewPlace } from '../domain/newPlace.model';

@Injectable({
  providedIn: 'root',
})
export class CreatePlace {
  constructor(private ar: AdminRepository) {}

  execute(place: NewPlace): Observable<any> {
    return this.ar.createPlace(place);
  }
}
