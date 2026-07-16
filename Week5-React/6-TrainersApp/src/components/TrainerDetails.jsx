import React from 'react';
import { useParams, Link } from 'react-router-dom';

function TrainerDetail({ trainers }) {
  const { id } = useParams();
  const trainer = trainers.find(t => t.TrainerId === parseInt(id));

  if (!trainer) {
    return (
      <div style={{ padding: '20px', color: '#b91c1c', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '8px' }}>
        <h3>Trainer Not Found</h3>
        <p>No trainer exists with ID: {id}</p>
        <Link to="/trainers" style={{ color: '#4f46e5', fontWeight: 'bold' }}>Back to List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
      <h3 style={{ margin: '0 0 20px 0', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', color: '#111827' }}>
        Trainer Details: {trainer.Name}
      </h3>
      <div style={{ lineHeight: '2.0', color: '#374151', fontSize: '1.05rem' }}>
        <p><strong>Trainer ID:</strong> {trainer.TrainerId}</p>
        <p><strong>Email Address:</strong> {trainer.Email}</p>
        <p><strong>Phone Number:</strong> {trainer.Phone}</p>
        <p><strong>Specialization Stream:</strong> {trainer.Technology}</p>
        <p><strong>Key Skills:</strong> {trainer.Skills}</p>
      </div>
      <div style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
        <Link 
          to="/trainers" 
          style={{ textDecoration: 'none', padding: '8px 16px', backgroundColor: '#4f46e5', color: 'white', borderRadius: '6px', fontWeight: '600' }}
        >
          Back to List
        </Link>
        <Link 
          to="/" 
          style={{ textDecoration: 'none', padding: '8px 16px', border: '1px solid #d1d5db', color: '#4b5563', borderRadius: '6px', fontWeight: '600' }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default TrainerDetail;
