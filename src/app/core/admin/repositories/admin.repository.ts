import { Observable } from 'rxjs';
import { Admin } from '../domain/admin.model';
import { SessionAdmin } from '../domain/session.model';

export abstract class AdminRepository {
  abstract signIn(admin: Admin): Observable<SessionAdmin>;
}
