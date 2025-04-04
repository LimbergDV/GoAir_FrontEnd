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
