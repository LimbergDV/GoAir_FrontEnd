import { Injectable } from '@angular/core';
import { ApplicationRepository } from '../../core/applications/repositories/application.repository';
import { map, Observable, Subject } from 'rxjs';
import { Application } from '../../core/applications/domain/application.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationListDTO } from '../../core/applications/dtos/appList.dto';
import { ApplicationMapper } from '../../core/applications/mappers/app.mapper';
import { ConnectionWS } from '../socket/connection';

@Injectable({
  providedIn: 'root',
})
export class ApplciationApi implements ApplicationRepository {
  URL_BASE = 'http://54.235.202.98/admin';
  token = localStorage.getItem('token') || 'No token';

  private appSubject = new Subject<Application>();

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient, private connectionWS: ConnectionWS) {
    const socket = this.connectionWS.getOrCreateSocket('user', 'admin');
    socket.onmessage = (event) => {
      console.log(event.data);

      try {
        const app = JSON.parse(event.data) as Application;
        this.appSubject.next(app);
        console.log(app);
        
      } catch (error) {
        console.error('Error al parsear el mensaje:', error);
      }
    };
  }

  getApplication(): Observable<Application> {
    return this.appSubject.asObservable();
  }

  getAllApplications(): Observable<Application[]> {
    return this.http
      .get<ApplicationListDTO>(`${this.URL_BASE}/apps`, {
        headers: this.headers,
      })
      .pipe(map(ApplicationMapper.toDomain));
  }
}
