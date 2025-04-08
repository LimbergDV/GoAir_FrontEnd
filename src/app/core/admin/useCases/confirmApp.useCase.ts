import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmApp {
  constructor(private ar: AdminRepository) {}

  execute(id_app: number): Observable<any> {
    return this.ar.confirmInstallation(id_app);
  }
}
