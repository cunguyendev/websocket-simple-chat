import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { WebSocketServer, WebSocket } from 'ws';

import http from 'http';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

type WebSocketCustom = WebSocket & {
  id: string;
};

wss.on('connection', (ws: WebSocketCustom) => {
  ws.id = uuidv4();
  console.log(`New client connected: ${ws.id}`);

  ws.send(JSON.stringify({ type: 'init', clientId: ws.id }));

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === ws.OPEN) {
        client.send(
          JSON.stringify({ message: message.toString('utf-8'), from: ws.id })
        );
      }
    });
  });

  ws.on('close', () => console.log('Client disconnected'));
});

server.listen(3000, () =>
  console.log('Server running on http://localhost:3000')
);
