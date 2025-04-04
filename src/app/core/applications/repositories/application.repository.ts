import { Observable } from 'rxjs';
import { Application } from '../domain/application.model';

export abstract class ApplicationRepository {
  abstract getAllApplications(): Observable<Application[]>;
  abstract getApplication(): Observable<Application>;
}
