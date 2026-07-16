import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TrainersMock } from './TrainersMock';
import Home from './components/Home';
import TrainersList from './components/Trainerlist';
import TrainerDetail from './components/TrainerDetails';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px', fontFamily: 'Segoe UI, Arial, sans-serif' }}>
        {/* Navigation bar */}
        <nav style={{ display: 'flex', gap: '20px', padding: '15px 20px', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '30px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#374151', fontWeight: 'bold' }}>Home</Link>
          <Link to="/trainers" style={{ textDecoration: 'none', color: '#374151', fontWeight: 'bold' }}>Trainers List</Link>
        </nav>

        {/* Route views */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList trainers={TrainersMock} />} />
          <Route path="/trainers/:id" element={<TrainerDetail trainers={TrainersMock} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
