import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionWS {
  private socket!: WebSocket;
  constructor() {
    this.connection();
  }
  connection() {
    // Conexión al servidor WebSocket
    this.socket = new WebSocket('ws://localhost:8081/ws');

    this.socket.onopen = () => {
      console.log('Conectado al servidor WebSocket\n');
    };

    // socket.onmessage = (event) => {};

    this.socket.onclose = () => {
      console.log('Conexión cerrada\n');
    };

    this.socket.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  getSocket(): WebSocket {
    return this.socket;
  }
}
