import { Observable } from 'rxjs';
import { Admin } from '../domain/admin.model';
import { SessionAdmin } from '../domain/session.model';
import { User } from '../../users/domain/user.model';
import { Place } from '../domain/place.model';
import { IDSDTO } from '../adapters/dtos/ids.dto';

export abstract class AdminRepository {
  abstract signIn(admin: Admin): Observable<SessionAdmin>;
  abstract searchUser(last_name: string): Observable<User>;
  abstract getPlacesUser(id_user: number): Observable<Place[]>;
  abstract getIDS(id_palce: number): Observable<IDSDTO>;
}
