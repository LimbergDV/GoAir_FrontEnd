import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateApp {
  constructor(private ur: UserRepository) {}
  execute(): Observable<any> {
    return this.ur.createApp();
  }
}
