import { Observable } from 'rxjs';
import { Admin } from '../domain/admin.model';
import { SessionAdmin } from '../domain/session.model';
import { User } from '../../users/domain/user.model';
import { Place } from '../domain/place.model';
import { IDSDTO } from '../adapters/dtos/ids.dto';
import { Application } from '../domain/apps.model';

export abstract class AdminRepository {
  abstract signIn(admin: Admin): Observable<SessionAdmin>;
  abstract searchUser(last_name: string): Observable<User>;
  abstract getPlacesUser(id_user: number): Observable<Place[]>;
  abstract getIDS(id_palce: number): Observable<IDSDTO>;
  abstract deletePlace(id_place: number): Observable<any>;
  abstract getApp(id_user: number): Observable<Application[]>;
}
