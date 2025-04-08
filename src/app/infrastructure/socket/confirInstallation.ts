import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConnectionWS } from './connection';

@Injectable({
  providedIn: 'root',
})
export class ConfirmHandler {
  constructor(private connectionWS: ConnectionWS) {}

  createConnection(id_user: number) {
    const socket = this.connectionWS.getOrCreateSocket(
      'confirm',
      id_user.toString()
    );

    socket.onmessage = (event) => {
      console.log(event.data);

      try {
        window.location.reload();
      } catch (error) {
        console.error('Error al parsear el mensaje:', error);
      }
    };
  }
}
