import { WebSocket } from 'ws';

type Message = {
  message: string;
  from: string;
};

type ClientInit = {
  type: string;
  clientId: string;
};

export class Client {
  id: string;
  socket: WebSocket;

  constructor(id: string, socket: WebSocket) {
    this.id = id;
    this.socket = socket;
  }

  send(data: Message | ClientInit) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    }
  }
}
