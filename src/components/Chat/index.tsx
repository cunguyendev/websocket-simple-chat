// Theme
import { Message } from '../Message';

const conversation = [
  {
    message: 'Hi, how are you?',
    isYou: true,
  },
  {
    message: "I'm good, thanks! And you?",
    isYou: false,
  },
  {
    message: "I'm fine. What are you doing?",
    isYou: true,
  },
  {
    message: "I'm reading a book. What about you?",
    isYou: false,
  },
  {
    message:
      'Would you like a version with translation or practice questions too?',
    isYou: true,
  },
];

export const Chat = () => {
  return (
    <div className="max-w-[425px] mx-auto flex-1 overflow-y-auto p-4 rounded-lg">
      <div className="flex flex-col gap-3">
        {conversation.map(({ message, isYou }) => {
          return (
            <Message
              align={isYou ? 'left' : 'right'}
              message={message}
              key={message}
            />
          );
        })}
      </div>
    </div>
  );
};
