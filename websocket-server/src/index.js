const { v4: uuidv4 } = require('uuid');
const express = require('express');
const { WebSocketServer } = require('ws');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
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
