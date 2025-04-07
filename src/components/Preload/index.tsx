import { ReactNode, useCallback, useEffect, useState } from 'react';

interface PreloadProps {
  children?: ReactNode;
}

const server = import.meta.env.VITE_DOMAIN_SERVER;

export const Preload = ({ children }: PreloadProps) => {
  const [healthCheck, setHealthCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleHealthCheck = useCallback(async () => {
    setIsLoading(true);
    try {
      const request = await fetch(`${server}/health`);
      const response = await request.text();

      setHealthCheck(response === 'OK');
    } catch (error) {
      console.log('Error while checking health: ', error);
      setHealthCheck(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await handleHealthCheck();
    })();
  }, [handleHealthCheck]);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 flex-1 items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <p className="px-4 text-sm text-gray-500 text-center">
          Performing health check…
        </p>
      </div>
    );
  }

  if (!healthCheck) {
    return (
      <div className="px-4 flex flex-col gap-4 flex-1 items-center justify-center">
        <p className="text-sm text-gray-500 text-center">
          Health verification failed. Some services may be down.
        </p>

        <button
          onClick={handleHealthCheck}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition active:scale-95 duration-150"
        >
          Recheck
        </button>
      </div>
    );
  }

  return <>{children}</>;
};
