import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Observable } from 'rxjs';
import { User } from '../../users/domain/user.model';

@Injectable({
  providedIn: 'root',
})
export class SearchUser {
  constructor(private ar: AdminRepository) {}

  execute(last_name: string): Observable<User> {
    return this.ar.searchUser(last_name);
  }
}
