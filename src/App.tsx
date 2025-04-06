// Layouts
import { MainLayout } from './layouts';

// Components
import { Chat } from './components';

const App = () => {
  return (
    <MainLayout title="WebSocket - Simple chat">
      <Chat />
    </MainLayout>
  );
};

export default App;
