import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConnectionWS implements OnDestroy {
  private sockets: Map<string, WebSocket> = new Map();
  private pingInterval: any;

  constructor() {}

  // Crea o devuelve una conexión WebSocket según tipo y key
  getOrCreateSocket(type: string, key: string): WebSocket {
    const url = `ws://34.238.54.196/ws?type=${type}&key=${key}`;

    // Si ya existe y está abierta, la devolvemos
    if (this.sockets.has(url)) {
      const existingSocket = this.sockets.get(url)!;
      if (existingSocket.readyState === WebSocket.OPEN || existingSocket.readyState === WebSocket.CONNECTING) {
        return existingSocket;
      }
    }

    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log(`[${type}] Conectado a WebSocket`);
    };

    socket.onmessage = (event) => {
      console.log(`[${type}] Mensaje recibido: `, event.data);
    };

    socket.onclose = (event) => {
      console.warn(`[${type}] Conexión cerrada`, event.reason);
      // Intentar reconectar después de un tiempo
      setTimeout(() => this.getOrCreateSocket(type, key), 5000);
    };

    socket.onerror = (error) => {
      console.error(`[${type}] Error en WebSocket`, error);
    };

    // Guardar socket
    this.sockets.set(url, socket);

    // Inicializar el ping si aún no existe
    if (!this.pingInterval) {
      this.initPing();
    }

    return socket;
  }

  // Mantiene la conexión viva (cada 30 segundos)
  private initPing() {
    this.pingInterval = setInterval(() => {
      this.sockets.forEach((socket, url) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send('ping');
        }
      });
    }, 30000); // cada 30 segundos
  }

  ngOnDestroy(): void {
    this.sockets.forEach((socket) => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    });
    clearInterval(this.pingInterval);
  }
}
