import { Injectable } from '@angular/core';
import { AdminRepository } from '../../core/admin/repositories/admin.repository';
import { map, Observable } from 'rxjs';
import { Admin } from '../../core/admin/domain/admin.model';
import { SessionAdmin } from '../../core/admin/domain/session.model';
import { HttpClient } from '@angular/common/http';
import { SessionAdminDTO } from '../../core/admin/adapters/dtos/session.dto';
import { SessionAdminMapper } from '../../core/admin/adapters/mappers/session.mapper';

@Injectable({
  providedIn: 'root',
})
export class AdminApi implements AdminRepository {
  private URL_BASE = 'http://54.235.202.98/admin';

  constructor(private http: HttpClient) {}

  signIn(admin: Admin): Observable<SessionAdmin> {
    return this.http
      .post<SessionAdminDTO>(`${this.URL_BASE}/login`, admin)
      .pipe(map(SessionAdminMapper.fromDTO));
  }
}
