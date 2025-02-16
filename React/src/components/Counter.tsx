export const Counter = ({
  counter,
  handleSetvalue
}: {
  counter: number;
  handleSetvalue: (value: number) => void;
}) => {
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleSetvalue(counter + 1)}>Increment</button>
      <button onClick={() => handleSetvalue(counter - 1)}>Decrement</button>
    </div>
  );
};
