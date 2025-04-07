import { WebSocketServer, WebSocket, RawData } from 'ws';
import { v4 as uuidv4 } from 'uuid';

// Modules
import { Client } from './Client';

// Logger
import logger from '../logger';

export class WebSocketManager {
  private wss: WebSocketServer;
  private clients: Map<string, Client> = new Map();

  constructor(wss: WebSocketServer) {
    this.wss = wss;
    this.initialize();
  }

  private initialize() {
    this.wss.on('connection', (socket: WebSocket) => {
      const id = uuidv4();
      const client = new Client(id, socket);

      this.clients.set(id, client);

      logger.debug(`Client connected: ${id}`);
      client.send({ type: 'init', clientId: id });

      socket.on('message', (message) => this.handleMessage(id, message));
      socket.on('close', () => this.handleClose(id));
    });
  }

  private handleMessage(senderId: string, message: RawData) {
    logger.debug(`Received from ${senderId}: ${message}`);
    this.broadcast(senderId, message.toString());
  }

  private handleClose(clientId: string) {
    logger.warning(`Client disconnected: ${clientId}`);
  }

  private broadcast(fromId: string, message: string) {
    this.clients.forEach((client) => {
      client.send({ message: message.toString(), from: fromId });
    });
  }
}
