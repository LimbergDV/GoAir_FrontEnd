import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';
import { Application } from '../../admin/domain/apps.model';

@Injectable({
  providedIn: 'root',
})
export class GetAppUser {
  constructor(private ur: UserRepository) {}
  execute(): Observable<Application[]> {
    return this.ur.getAppsUser();
  }
}
