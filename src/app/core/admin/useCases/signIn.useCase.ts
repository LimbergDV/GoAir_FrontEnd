import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Admin } from '../domain/admin.model';
import { Observable } from 'rxjs';
import { SessionAdmin } from '../domain/session.model';

@Injectable({
  providedIn: 'root',
})
export class SignIn {
  constructor(private ar: AdminRepository) {}

  execute(admin: Admin): Observable<SessionAdmin> {
    return this.ar.signIn(admin);
  }
}
