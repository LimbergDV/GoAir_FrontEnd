import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserRepository } from '../../core/users/repositories/user.repository';
import { User } from '../../core/users/domain/user.model';
import { SessionUser } from '../../core/users/domain/session.model';
import { SessionUserDTO } from '../../core/users/adapters/dtos/session.dto';
import { SessionUserMapper } from '../../core/users/adapters/mappers/session.mapper';
import { Place } from '../../core/admin/domain/place.model';
import { PlacesResponseDTO } from '../../core/admin/adapters/dtos/placeList.dto';
import { PlaceMapper } from '../../core/admin/adapters/mappers/place.dto';
import { Application } from '../../core/admin/domain/apps.model';
import { ApplicationsResponseDTO } from '../../core/admin/adapters/dtos/apps.dtos';
import { ApplicationMapperRes } from '../../core/admin/adapters/mappers/apps.mapper';

@Injectable({
  providedIn: 'root',
})
export class UserApi implements UserRepository {
  private URL_BASE = 'http://52.6.93.122/users';

  token = localStorage.getItem('token') || 'No token';

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient) {}
  getAppsUser(): Observable<Application[]> {
    return this.http
      .get<ApplicationsResponseDTO>(`http://52.6.93.122/applications/apps`, {
        headers: this.headers,
      })
      .pipe(map((res) => ApplicationMapperRes.map(res)));
  }

  createApp(): Observable<any> {
    return this.http.post(
      'http://52.6.93.122/applications/',
      {},
      {
        headers: this.headers,
      }
    );
  }

  getPlaces(): Observable<Place[]> {
    return this.http
      .get<PlacesResponseDTO>(`${this.URL_BASE}/places`, {
        headers: this.headers,
      })
      .pipe(map((res) => PlaceMapper.fromDTOArray(res.places)));
  }

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
}
