import React, { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const flights = [
    { id: 'AI-101', airline: 'Air India', from: 'Mumbai (BOM)', to: 'New York (JFK)', time: '02:00 AM' },
    { id: 'EK-503', airline: 'Emirates', from: 'Mumbai (BOM)', to: 'London (LHR)', time: '04:30 AM' },
    { id: 'LH-756', airline: 'Lufthansa', from: 'Delhi (DEL)', to: 'Frankfurt (FRA)', time: '08:15 AM' },
    { id: 'SQ-421', airline: 'Singapore Airlines', from: 'Chennai (MAA)', to: 'Singapore (SIN)', time: '11:45 PM' }
  ];

  const handleBooking = (flightId) => {
    alert(`Successfully booked ticket for flight ${flightId}!`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ maxWidth: '750px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e5e7eb', paddingBottom: '15px', marginBottom: '25px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.75rem', color: '#111827' }}>SkyRoute Airways</h1>
            {isLoggedIn ? (
              <span style={{ fontSize: '0.9rem', color: '#059669', fontWeight: 'bold' }}>Logged In Mode</span>
            ) : (
              <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '500' }}>Guest Browsing Mode</span>
            )}
          </div>
          <div>
            {isLoggedIn ? (
              <button 
                onClick={() => setIsLoggedIn(false)} 
                style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Logout
              </button>
            ) : (
              <button 
                onClick={() => setIsLoggedIn(true)} 
                style={{ padding: '8px 16px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Login to Book
              </button>
            )}
          </div>
        </div>

        {/* Welcome Banner / Notification */}
        {isLoggedIn ? (
          <div style={{ padding: '15px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontWeight: '500', marginBottom: '20px' }}>
            Welcome back, Traveler! You are now eligible to book flight tickets.
          </div>
        ) : (
          <div style={{ padding: '15px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', color: '#1e40af', fontWeight: '500', marginBottom: '20px' }}>
            Guest mode: You can view schedule but booking is locked. Please login to book tickets.
          </div>
        )}

        {/* Flights Schedule */}
        <h3 style={{ color: '#374151', margin: '0 0 15px 0' }}>Available Flights</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
          {flights.map(flight => (
            <div key={flight.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '1px solid #e5e7eb', borderRadius: '10px', backgroundColor: '#f9fafb' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#111827' }}>
                  {flight.airline} <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>({flight.id})</span>
                </h4>
                <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem' }}>
                  <strong>Route:</strong> {flight.from} &rarr; {flight.to}
                </p>
                <p style={{ margin: '5px 0 0 0', color: '#6b7280', fontSize: '0.85rem' }}>
                  <strong>Departs:</strong> {flight.time}
                </p>
              </div>
              <div>
                {isLoggedIn ? (
                  <button 
                    onClick={() => handleBooking(flight.id)} 
                    style={{ padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 2px 4px rgba(16,185,129,0.15)' }}
                  >
                    Book Ticket
                  </button>
                ) : (
                  <button 
                    disabled 
                    style={{ padding: '10px 20px', backgroundColor: '#e5e7eb', color: '#9ca3af', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'not-allowed' }}
                  >
                    Locked
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
