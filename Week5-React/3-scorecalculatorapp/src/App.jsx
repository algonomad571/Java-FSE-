import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f3f4f6', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'Segoe UI, sans-serif', color: '#1f2937', marginBottom: '10px' }}>
        Student Portal
      </h1>
      {/* Invoke the functional component passing props */}
      <CalculateScore
        Name="Rahul Kumar"
        School="DAV Public School"
        Total={425}
        Goal={80}
      />
    </div>
  );
}

export default App;
