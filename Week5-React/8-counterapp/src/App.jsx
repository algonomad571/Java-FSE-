import React from 'react';
import CountPeople from './components/CountPeople';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CountPeople />
    </div>
  );
}

export default App;
