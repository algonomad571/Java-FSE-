import React, { useState } from 'react';

function CurrencyConvertor() {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inr || isNaN(inr)) {
      alert('Please enter a valid amount in INR');
      return;
    }
    // 1 Euro = 90 INR (assumption)
    const converted = (parseFloat(inr) / 90).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #d1d5db', borderRadius: '10px', backgroundColor: '#fcfcfc' }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#111827' }}>Currency Converter (INR to Euro)</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#4b5563', fontWeight: '500' }}>Amount in INR:</label>
          <input 
            type="text" 
            value={inr} 
            onChange={(e) => setInr(e.target.value)} 
            placeholder="Enter rupees" 
            style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '10px 16px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Convert
        </button>
      </form>
      {euro !== null && (
        <div style={{ marginTop: '15px', padding: '10px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '6px', textAlign: 'center', color: '#065f46', fontWeight: 'bold' }}>
          Equivalent Amount: €{euro}
        </div>
      )}
    </div>
  );
}

export default CurrencyConvertor;
