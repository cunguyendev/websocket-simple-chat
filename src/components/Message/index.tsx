import clsx from 'clsx';

// Theme
import { theme } from '../../theme';

interface MessageProps {
  align?: 'left' | 'right';
  message?: string;
}

export const Message = ({ align, message }: MessageProps) => {
  const isAlignLeft = align === 'left';

  return (
    <div
      className={clsx(
        `bg-[${theme.messageBackground}]`,
        'p-2 rounded-xl w-fit',
        isAlignLeft ? 'self-start rounded-tl-none' : 'self-end rounded-br-none'
      )}
    >
      <p className="text-white">{message}</p>
    </div>
  );
};
