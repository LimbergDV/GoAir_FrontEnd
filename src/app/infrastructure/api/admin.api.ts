import { Injectable } from '@angular/core';
import { AdminRepository } from '../../core/admin/repositories/admin.repository';
import { map, Observable } from 'rxjs';
import { Admin } from '../../core/admin/domain/admin.model';
import { SessionAdmin } from '../../core/admin/domain/session.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionAdminDTO } from '../../core/admin/adapters/dtos/session.dto';
import { SessionAdminMapper } from '../../core/admin/adapters/mappers/session.mapper';
import { User } from '../../core/users/domain/user.model';
import { UserDTO } from '../../core/users/adapters/dtos/User.dto';
import { UserMapper } from '../../core/users/adapters/mappers/user.mapper';
import { Place } from '../../core/admin/domain/place.model';
import { PlacesResponseDTO } from '../../core/admin/adapters/dtos/placeList.dto';
import { PlaceMapper } from '../../core/admin/adapters/mappers/place.dto';
import { IDSDTO } from '../../core/admin/adapters/dtos/ids.dto';
import { IDS } from '../../core/admin/adapters/mappers/ids.mapper';
import { Application } from '../../core/admin/domain/apps.model';
import { ApplicationsResponseDTO } from '../../core/admin/adapters/dtos/apps.dtos';
import { ApplicationMapperRes } from '../../core/admin/adapters/mappers/apps.mapper';

@Injectable({
  providedIn: 'root',
})
export class AdminApi implements AdminRepository {
  private URL_BASE = 'http://54.235.202.98/admin';
  token = localStorage.getItem('token') || 'No token';

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient) {}

  getApp(id_user: number): Observable<Application[]> {
    return this.http
      .get<ApplicationsResponseDTO>(`${this.URL_BASE}/apps/${id_user}`, {
        headers: this.headers,
      })
      .pipe(map((res) => ApplicationMapperRes.map(res)));
  }

  deletePlace(id_place: number): Observable<any> {
    return this.http.delete(`${this.URL_BASE}/${id_place}`, {
      headers: this.headers,
    });
  }

  getIDS(id_palce: number): Observable<IDSDTO> {
    return this.http
      .get<IDSDTO>(`${this.URL_BASE}/sensors/${id_palce}`, {
        headers: this.headers,
      })
      .pipe(map(IDS.map));
  }

  getPlacesUser(id_user: number): Observable<Place[]> {
    return this.http
      .get<PlacesResponseDTO>(`${this.URL_BASE}/places/${id_user}`, {
        headers: this.headers,
      })
      .pipe(map((res) => PlaceMapper.fromDTOArray(res.places)));
  }

  searchUser(last_name: string): Observable<User> {
    return this.http
      .get<UserDTO>(`${this.URL_BASE}/search?last_name=${last_name}`, {
        headers: this.headers,
      })
      .pipe(map(UserMapper.fromDTO));
  }

  signIn(admin: Admin): Observable<SessionAdmin> {
    return this.http
      .post<SessionAdminDTO>(`${this.URL_BASE}/login`, admin)
      .pipe(map(SessionAdminMapper.fromDTO));
  }
}
