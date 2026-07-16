import React from 'react';

function IndianPlayers() {
  const squad = [
    'Virat Kohli',    // Index 0 (Even)
    'Rohit Sharma',   // Index 1 (Odd)
    'KL Rahul',       // Index 2 (Even)
    'Shubman Gill',   // Index 3 (Odd)
    'Shreyas Iyer',   // Index 4 (Even)
    'Hardik Pandya',  // Index 5 (Odd)
    'Ravindra Jadeja',// Index 6 (Even)
    'Rishabh Pant'    // Index 7 (Odd)
  ];

  // Destructuring into Odd Team and Even Team
  // Odd indices: 1, 3, 5, 7. Even indices: 0, 2, 4, 6.
  const [even1, odd1, even2, odd2, even3, odd3, even4, odd4] = squad;
  const oddTeam = [odd1, odd2, odd3, odd4];
  const evenTeam = [even1, even2, even3, even4];

  // Merge feature of ES6 (Spread Operator)
  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Suryakumar Yadav', 'Hardik Pandya'];
  const RanjiTrophy = ['Priyank Panchal', 'Abhimanyu Easwaran', 'Sarfaraz Khan', 'Yashasvi Jaiswal'];
  const mergedPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '15px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
        <div style={{ padding: '15px', backgroundColor: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
          <h4 style={{ color: '#1e40af', margin: '0 0 10px 0' }}>Even Squad Team (Destructured)</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {evenTeam.map((p, idx) => <li key={idx} style={{ padding: '4px 0' }}>{p}</li>)}
          </ul>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#fdf2f8', borderRadius: '8px', border: '1px solid #fbcfe8' }}>
          <h4 style={{ color: '#9d174d', margin: '0 0 10px 0' }}>Odd Squad Team (Destructured)</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {oddTeam.map((p, idx) => <li key={idx} style={{ padding: '4px 0' }}>{p}</li>)}
          </ul>
        </div>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
        <h4 style={{ color: '#374151', margin: '0 0 12px 0' }}>Merged Players List (T20 + Ranji Squad)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {mergedPlayers.map((player, idx) => (
            <span key={idx} style={{ padding: '6px 12px', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '20px', fontSize: '0.9rem', fontWeight: '500' }}>
              {player}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IndianPlayers;
