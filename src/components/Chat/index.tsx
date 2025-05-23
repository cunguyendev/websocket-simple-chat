// Theme
import { Message } from '../Message';

// Interfaces
import { Message as MessageType } from '../../interfaces';

interface ChatProps {
  messages: MessageType[];
}

export const Chat = ({ messages }: ChatProps) => {
  return (
    <div className="max-w-[768px] w-full mx-auto flex-1 overflow-y-auto p-4 rounded-lg">
      <div className="flex flex-col gap-3">
        {messages.map(({ message, isYou }) => {
          return (
            <Message
              align={isYou ? 'right' : 'left'}
              message={message}
              key={message}
            />
          );
        })}
      </div>
    </div>
  );
};
