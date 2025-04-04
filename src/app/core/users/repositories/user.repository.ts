import { Observable } from 'rxjs';
import { SessionUser } from '../domain/session.model';
import { User } from '../domain/user.model';
import { Place } from '../domain/place.model';

export abstract class UserRepository {
  abstract signIn(user: User): Observable<SessionUser>;
  abstract signUp(user: User): Observable<SessionUser> //declarar otro caso de uso
  abstract getPlaces(place: Place): Observable<SessionUser>
}
