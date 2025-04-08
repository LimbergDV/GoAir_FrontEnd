import { Injectable } from '@angular/core';
import { AdminRepository } from '../repositories/admin.repository';
import { Observable } from 'rxjs';
import { IDSDTO } from '../adapters/dtos/ids.dto';

@Injectable({
  providedIn: 'root',
})
export class GetIDS {
  constructor(private ar: AdminRepository) {}

  execute(id_place: number): Observable<IDSDTO> {
    return this.ar.getIDS(id_place);
  }
}
