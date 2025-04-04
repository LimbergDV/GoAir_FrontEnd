import { Injectable } from '@angular/core';
import { ApplicationRepository } from '../repositories/application.repository';
import { Observable } from 'rxjs';
import { Application } from '../domain/application.model';

@Injectable({
  providedIn: 'root',
})
export class GetAllApplications {
  constructor(private ap: ApplicationRepository) {}

  execute(): Observable<Application[]> {
    return this.ap.getAllApplications();
  }
}
