import { Counter } from '../components/Counter';
import { CONFIG } from '../config/config';
import { useMessageListener } from '../hooks/useMessageListener';

export const CounterPage = () => {
  const [initialValue, setInitialValue] = useMessageListener(
    CONFIG.MESSAGE_ORIGIN
  );

  return (
    <>
      <Counter
        counter={initialValue}
        handleSetvalue={(value) => setInitialValue(value)}
      />

      <button
        onClick={() => {
          window.parent.postMessage({ counter: initialValue }, '*');
        }}
      >
        Enviar a Angular
      </button>
    </>
  );
};
