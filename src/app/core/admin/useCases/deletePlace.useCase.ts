import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeletePalce {
  constructor(private ar: AdminRepository) {}

  execute(id_place: number): Observable<any> {
    return this.ar.deletePlace(id_place);
  }
}
