import React from 'react';
import { Link } from 'react-router-dom';

function TrainersList({ trainers }) {
  return (
    <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <h3 style={{ color: '#111827', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', marginTop: 0 }}>
        Our Trainers
      </h3>
      <ul style={{ listStyleType: 'none', padding: 0, margin: '20px 0 0 0' }}>
        {trainers.map(trainer => (
          <li key={trainer.TrainerId} style={{ margin: '12px 0' }}>
            <Link 
              to={`/trainers/${trainer.TrainerId}`} 
              style={{ fontSize: '1.15rem', color: '#4f46e5', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = '#3730a3'}
              onMouseOut={(e) => e.target.style.color = '#4f46e5'}
            >
              {trainer.Name} - {trainer.Technology}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainersList;
