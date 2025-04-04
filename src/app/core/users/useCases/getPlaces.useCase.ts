import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionUser } from '../domain/session.model';
import { UserRepository } from '../repositories/user.repository';
import { Place } from '../domain/place.model';

@Injectable({
  providedIn: 'root',
})
export class GetPlaces {
  constructor(private ur: UserRepository) {}

  execute(place: Place): Observable<SessionUser> {
    return this.ur.getPlaces(place);
  }
}
