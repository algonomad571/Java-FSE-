import React, { useState } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  // Increment invokes multiple methods
  const handleIncrement = () => {
    // Method 1: Increment state
    setCount(prev => prev + 1);
    // Method 2: Say Hello followed by static message
    console.log("Hello, Counter has been incremented!");
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  // Takes argument
  const sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic event
  const handlePress = (e) => {
    console.log("Synthetic event triggered:", e);
    alert("I was clicked (Synthetic Event: " + e.type + ")");
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <h1 style={{ textAlign: 'center', color: '#111827', margin: '0 0 30px 0' }}>Event Examples App</h1>
        
        {/* Section 1: Counter */}
        <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
          <h3>Counter: {count}</h3>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <button 
              onClick={handleIncrement} 
              style={{ padding: '8px 16px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Increment (Multi-methods)
            </button>
            <button 
              onClick={handleDecrement} 
              style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Decrement
            </button>
          </div>
        </div>

        {/* Section 2: Actions */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px' }}>
          <button 
            onClick={() => sayWelcome('Welcome to React Events!')} 
            style={{ padding: '10px 20px', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white', cursor: 'pointer', fontWeight: '500' }}
          >
            Say Welcome
          </button>
          <button 
            onClick={handlePress} 
            style={{ padding: '10px 20px', border: '1px solid #d1d5db', borderRadius: '6px', backgroundColor: 'white', cursor: 'pointer', fontWeight: '500' }}
          >
            OnPress (Synthetic Event)
          </button>
        </div>

        {/* Section 3: Currency Converter */}
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
