import { Observable } from 'rxjs';
import { SessionUser } from '../domain/session.model';
import { User } from '../domain/user.model';

export abstract class UserRepository {
  abstract signIn(user: User): Observable<SessionUser>;
}
