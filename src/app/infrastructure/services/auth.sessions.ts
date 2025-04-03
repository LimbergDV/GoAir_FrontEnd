import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthSessions {
  URL_USER = 'http://52.6.93.122/users/token';
  URL_ADMIN = 'http://54.235.202.98/admin/token';

  constructor(private http: HttpClient) {}

  saveSession(token: string, rol: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rol);
  }

  async validateToken(rol: string): Promise<boolean> {
    const token = localStorage.getItem('token') || 'No token';

    if (rol != 'user') {
        try {
            await firstValueFrom(this.fetchAPI(token, rol));
            return true            
        } catch (err: any) {
            if (err.status === 401) {
                return false
            }
            console.log(err);
        }
    }

    return false
  }

  private fetchAPI(token: string, rol: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    if (rol != 'user') {
      return this.http.get<any>(this.URL_ADMIN, { headers });
    }

    return this.http.get<any>(this.URL_USER, { headers });
  }
}
