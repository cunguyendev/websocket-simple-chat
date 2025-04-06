// Layouts
import { MainLayout } from './layouts';

// Components
import { Chat, InputMessage } from './components';

// Hooks
import { useWebSocket } from './hooks';

const App = () => {
  const { messages, sendMessage } = useWebSocket();

  const handleSendMessage = (message: string) => {
    if (message) {
      sendMessage(message);
    }
  };

  return (
    <MainLayout title="WebSocket - Simple chat">
      <Chat messages={messages} />
      <InputMessage onSendMessage={handleSendMessage} />
    </MainLayout>
  );
};

export default App;
