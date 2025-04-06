// Layouts
import { MainLayout } from './layouts';

// Components
import { Chat, InputMessage } from './components';

const App = () => {
  const handleSendMessage = (message: string) => {
    console.log('->>', message);
  };

  return (
    <MainLayout title="WebSocket - Simple chat">
      <Chat />
      <InputMessage onSendMessage={handleSendMessage} />
    </MainLayout>
  );
};

export default App;
