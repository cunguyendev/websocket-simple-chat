// Layouts
import { MainLayout } from './layouts';

// Components
import { Chat, InputMessage } from './components';
import { Preload } from './components/Preload';

// Hooks
import { useWebSocket } from './hooks';
import { appInformation } from './constants';

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
    <MainLayout title={appInformation.description} isShowVersion>
      <Preload>
        <Chat messages={formatMessages} />
        <InputMessage onSendMessage={handleSendMessage} />
      </Preload>
    </MainLayout>
  );
};

export default App;
