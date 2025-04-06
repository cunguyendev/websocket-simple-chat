import { useEffect, useRef, useState } from 'react';

export const useWebSocket = () => {
  const [messages, setMessages] = useState<
    { message: string; isYou: boolean }[]
  >([]);

  const ws = useRef<WebSocket>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3000');

    ws.current.onmessage = async (event) => {
      const text = await event.data.text();
      setMessages((prev) => [...prev, { message: text, isYou: false }]);
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
    sendMessage,
  };
};
