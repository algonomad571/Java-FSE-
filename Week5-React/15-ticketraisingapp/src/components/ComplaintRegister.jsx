import React, { useState } from 'react';

function ComplaintRegister() {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.strip || !name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!complaint.strip || !complaint.trim()) {
      alert('Please enter your complaint.');
      return;
    }

    // Generate a random 5-digit reference number
    const refNumber = Math.floor(10000 + Math.random() * 90000);

    alert(
      `Complaint Submitted Successfully!\n\n` +
      `Employee Name: ${name}\n` +
      `Complaint: ${complaint}\n` +
      `Reference Number: ${refNumber}\n\n` +
      `Please save this reference number for future correspondence.`
    );

    // Clear form
    setName('');
    setComplaint('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto', padding: '25px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#111827', margin: '0 0 20px 0', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', textAlign: 'center' }}>
        Submit a Complaint
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#4b5563', fontWeight: '600' }}>
            Employee Name:
          </label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your full name" 
            style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#4b5563', fontWeight: '600' }}>
            Complaint Description:
          </label>
          <textarea 
            value={complaint} 
            onChange={(e) => setComplaint(e.target.value)} 
            placeholder="Describe your complaint here..." 
            rows="5"
            style={{ width: '100%', padding: '10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box', fontFamily: 'inherit' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#3730a3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default ComplaintRegister;
