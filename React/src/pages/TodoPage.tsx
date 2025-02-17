export const TodoPage = () => {
  const handleSendMessage = () => {
    window.opener.postMessage({ message: 'Hello from React' }, '*');
  };

  return (
    <>
      <h1>Todo Page</h1>
      <button onClick={handleSendMessage}>Send message to Angular</button>
    </>
  );
};
