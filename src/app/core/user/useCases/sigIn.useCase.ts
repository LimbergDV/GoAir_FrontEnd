import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionUser } from '../domain/session.model';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../domain/user.model';

@Injectable({
  providedIn: 'root',
})
export class SignIn {
  constructor(private ur: UserRepository) {}

  execute(user: User): Observable<SessionUser> {
    return this.ur.signIn(user);
  }
}
