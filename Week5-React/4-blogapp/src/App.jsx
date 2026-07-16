import React from 'react';
import Posts from './components/Posts';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Segoe UI, sans-serif', color: '#111827', marginBottom: '30px' }}>
          My Blogger System
        </h1>
        <Posts />
      </div>
    </div>
  );
}

export default App;
