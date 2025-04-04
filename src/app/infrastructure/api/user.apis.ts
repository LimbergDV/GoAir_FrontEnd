import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRepository } from '../../core/users/repositories/user.repository';
import { User } from '../../core/users/domain/user.model';
import { SessionUser } from '../../core/users/domain/session.model';
import { SessionUserDTO } from '../../core/users/adapters/dtos/session.dto';
import { SessionUserMapper } from '../../core/users/adapters/mappers/session.mapper';
import { Place } from '../../core/users/domain/place.model';


@Injectable({
  providedIn: 'root',
})
export class UserApi implements UserRepository {
  private URL_BASE = 'http://52.6.93.122/users';

  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<SessionUser> {
    return this.http
      .post<SessionUserDTO>(`${this.URL_BASE}/login`, user)
      .pipe(map(SessionUserMapper.fromDTOU));
  }

  signUp(user: User): Observable<SessionUser> {
    return this.http
      .post<SessionUserDTO>(`${this.URL_BASE}/`, user)
      .pipe(map(SessionUserMapper.fromDTOU));
  }

  getPlaces(place: Place): Observable<SessionUser>{
    return this.http
      .post<SessionUserDTO>(`${this.URL_BASE}/`, place)
      .pipe(map(SessionUserMapper.fromDTOU));
  }

}
