import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserRepository } from '../../core/user/repositories/user.repository';
import { SessionUser } from '../../core/user/domain/session.model';
import { SessionUserMapper } from '../../core/user/adapters/mappers/session.mapper';
import { User } from '../../core/user/domain/user.model';
import { SessionUserDTO } from '../../core/user/adapters/dtos/session.dto';

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
}
