import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Place } from '../domain/place.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetPlacesUser {
  constructor(private ar: AdminRepository) {}

  execute(id_user: number): Observable<Place[]> {
    return this.ar.getPlacesUser(id_user);
  }
}
