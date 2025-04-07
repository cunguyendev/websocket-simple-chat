// Layouts
import { MainLayout } from './layouts';

// Components
import { Chat, InputMessage } from './components';

// Hooks
import { useWebSocket } from './hooks';

const App = () => {
  const { messages, currentClientId, sendMessage } = useWebSocket();

  const handleSendMessage = (message: string) => {
    if (message) {
      sendMessage(message);
    }
  };

  const formatMessages = messages.map((message) => ({
    isYou: message.from === currentClientId,
    ...message,
  }));

  return (
    <MainLayout title="WebSocket - Simple chat">
      <Chat messages={formatMessages} />
      <InputMessage onSendMessage={handleSendMessage} />
    </MainLayout>
  );
};

export default App;
