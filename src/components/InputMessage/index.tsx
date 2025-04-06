import { useCallback, useRef } from 'react';
import { LuSendHorizontal } from 'react-icons/lu';

interface InputMessageProps {
  onSendMessage?: (message: string) => void;
}

export const InputMessage = ({ onSendMessage }: InputMessageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = useCallback(() => {
    if (inputRef?.current) {
      onSendMessage?.(inputRef.current?.value ?? '');

      inputRef.current.value = '';
    }
  }, [onSendMessage]);

  const handleOnSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      handleSendMessage();
      e.preventDefault();
    },
    [handleSendMessage]
  );

  return (
    <form
      onSubmit={handleOnSubmitForm}
      className="bg-white flex items-center px-4"
    >
      <input
        type="text"
        placeholder="Input message"
        className="border-none focus:border-none focus-visible:outline-none p-4 pl-0 flex-1"
        ref={inputRef}
      />

      <div className="h-10 w-10">
        <button
          type="button"
          className="bg-[#7a5cff] hover:opacity-80 rounded-full w-full h-full flex items-center justify-center"
          onClick={handleOnSubmitForm}
        >
          <LuSendHorizontal color="#fff" />
        </button>
      </div>
    </form>
  );
};
