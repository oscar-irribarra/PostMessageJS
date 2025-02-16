import './App.css';
import { Counter } from './components/Counter';
import { useMessageListener } from './hooks/useMessageListener';
import { CONFIG } from './config/config';

function App() {
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
}

export default App;
