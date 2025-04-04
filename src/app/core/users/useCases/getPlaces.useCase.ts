import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';
import { Place } from '../../admin/domain/place.model';

@Injectable({
  providedIn: 'root',
})
export class GetPlaces {
  constructor(private ur: UserRepository) {}

  execute(): Observable<Place[]> {
    return this.ur.getPlaces();
  }
}
