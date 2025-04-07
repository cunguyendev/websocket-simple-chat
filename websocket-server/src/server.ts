import express from 'express';
import http from 'http';
import cors from 'cors';
import { WebSocketServer } from 'ws';

// Routes
import routes from './routes';

// WebSocket
import { WebSocketManager } from './websocket/WebSocketManager';

// Logger
import logger from './logger';

const app = express();
app.use(cors());
app.use(routes);

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

new WebSocketManager(wss);

server.listen(3000, () =>
  logger.info('🚀 Server started successfully on port 3000')
);
