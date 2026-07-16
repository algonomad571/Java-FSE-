import React from 'react';

function App() {
  const offices = [
    { id: 1, name: 'Premium Tech Park Space', rent: 75000, address: 'Sector 62, Noida, UP', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Co-Working Shared Desk Space', rent: 35000, address: 'MG Road, Bengaluru, KA', image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Executive Suite Office', rent: 110000, address: 'Cyber City, Gurugram, HR', image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Eco-Friendly StartUp Hub', rent: 55000, address: 'Hitec City, Hyderabad, TG', image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '40px 20px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#111827', margin: '0 0 10px 0' }}>
          Office Space Rental Finder
        </h1>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.1rem', marginBottom: '40px' }}>
          Explore premium workspaces in major business hubs.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {offices.map(office => {
            const rentColor = office.rent < 60000 ? '#dc2626' : '#16a34a';
            return (
              <div 
                key={office.id} 
                style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}
              >
                <img 
                  src={office.image} 
                  alt={office.name} 
                  style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
                  onError={(e) => {
                    // Fallback to custom SVG placeholder if Unsplash is blocked/offline
                    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16" fill="%239ca3af">Workspace Image</text></svg>';
                  }}
                />
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1f2937', fontSize: '1.2rem' }}>
                    {office.name}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: '0 0 15px 0', flexGrow: 1 }}>
                    <strong>Address:</strong> {office.address}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '15px' }}>
                    <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: '500' }}>Monthly Rent</span>
                    {/* Render color in RED if below 60000 and GREEN if above 60000 */}
                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: rentColor }}>
                      INR {office.rent.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
