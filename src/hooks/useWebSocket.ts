import { useEffect, useRef, useState } from 'react';

// Interfaces
import { ClientInit, Message } from '../interfaces';

export const useWebSocket = () => {
  const [currentClientId, setCurrentClientId] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const ws = useRef<WebSocket>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3000');

    ws.current.onmessage = async (event) => {
      const data = await event.data;

      try {
        const parseData = JSON.parse(data) as ClientInit | Message;

        if ('type' in parseData) {
          setCurrentClientId(parseData.clientId);
        }

        if ('message' in parseData) {
          setMessages((prev) => [...prev, { ...parseData }]);
        }
      } catch (error) {
        console.log('Error while parsing data: ', error);
      }
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = (message: string) => {
    if (ws.current && message.trim()) {
      ws.current.send(message);
    }
  };

  return {
    messages,
    currentClientId,
    sendMessage,
  };
};
