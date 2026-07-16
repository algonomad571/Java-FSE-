import React, { useState } from 'react';
import './App.css';
import { EmployeesData } from './Employee';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';

function App() {
  const Employees = EmployeesData;
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '25px', fontFamily: 'Segoe UI, sans-serif' }}>
        <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb', display: 'flex', gap: '15px', alignItems: 'center' }}>
          <label style={{ fontWeight: '600', color: '#374151' }}>SELECT A THEME </label>
          <select 
            onChange={(e) => setTheme(e.target.value)}
            style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer' }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <EmployeesList employees={Employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
