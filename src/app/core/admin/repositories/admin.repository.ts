import { Observable } from 'rxjs';
import { Admin } from '../domain/admin.model';
import { SessionAdmin } from '../domain/session.model';
import { User } from '../../users/domain/user.model';

export abstract class AdminRepository {
  abstract signIn(admin: Admin): Observable<SessionAdmin>;
  abstract searchUser(last_name: string): Observable<User>;
}
