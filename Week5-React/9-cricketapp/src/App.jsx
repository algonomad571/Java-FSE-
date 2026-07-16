import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Segoe UI, sans-serif', color: '#111827', margin: '0 0 20px 0' }}>
          Cricket Squad Manager
        </h1>
        
        {/* Toggle flag button */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <button 
            onClick={() => setFlag(!flag)} 
            style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#3730a3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
          >
            Toggle View (Current: {flag ? 'ListofPlayers' : 'IndianPlayers'})
          </button>
        </div>

        {/* Conditional rendering based on flag */}
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
    </div>
  );
}

export default App;
