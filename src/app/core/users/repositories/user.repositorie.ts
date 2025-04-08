import { Observable } from 'rxjs';
import { User } from '../domain/user.model';

export abstract class BookRepository {
  // Ingerfaz de los casos de uso haciendo referencia a go
  abstract createUser(User: User): Observable<User>;
  abstract getAllUsers(): Observable<User[]>;
  abstract getAllUsersById(id_User: number): Observable<User[]>;
  abstract updateUser(id_User: number, User: User): Observable<User>;
  abstract deleteUser(id_book: number): Observable<User>;
}
