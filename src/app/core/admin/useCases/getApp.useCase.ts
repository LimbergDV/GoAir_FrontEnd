import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Observable } from 'rxjs';
import { Application } from '../domain/apps.model';

@Injectable({
  providedIn: 'root',
})
export class GetApp {
  constructor(private ar: AdminRepository) {}

  execute(id_user: number): Observable<Application[]> {
    return this.ar.getApp(id_user);
  }
}
