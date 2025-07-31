import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io();

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => setConnected(true));
    socket.on('disconnect', () => setConnected(false));
  }, []);

  return (
    <div>
      <h1>Real Time Commerce</h1>
      <p>Socket connected: {connected ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default App;
