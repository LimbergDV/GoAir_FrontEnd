import { Observable } from 'rxjs';
import { SessionUser } from '../domain/session.model';
import { User } from '../domain/user.model';
import { Place } from '../../admin/domain/place.model';
import { Application } from '../../admin/domain/apps.model';

export abstract class UserRepository {
  abstract signIn(user: User): Observable<SessionUser>;
  abstract signUp(user: User): Observable<SessionUser>; //declarar otro caso de uso
  abstract getPlaces(): Observable<Place[]>;
  abstract createApp(): Observable<any>;
  abstract getAppsUser(): Observable<Application[]>;
}
