import { useEffect, useState } from 'react';

export const useMessageListener = (origin: string) => {
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    const recibirMensaje = (event: MessageEvent) => {
      if (event.origin !== origin) return;

      console.log('Mensaje recibido desde React:', event.data);

      setInitialValue(event.data.counter);
    };

    window.addEventListener('message', recibirMensaje);

    return () => {
      window.removeEventListener('message', recibirMensaje);
    };
  }, [origin]);

  return [initialValue, setInitialValue] as const;
};
