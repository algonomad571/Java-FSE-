import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 92 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Shubman Gill', score: 78 },
    { name: 'Shreyas Iyer', score: 60 },
    { name: 'Hardik Pandya', score: 65 },
    { name: 'Ravindra Jadeja', score: 50 },
    { name: 'Rishabh Pant', score: 88 },
    { name: 'Suryakumar Yadav', score: 110 },
    { name: 'Axar Patel', score: 35 },
    { name: 'Jasprit Bumrah', score: 15 }
  ];

  // Filter players with scores >= 70 using arrow functions
  const highScorers = players.filter(player => player.score >= 70);

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '15px' }}>
      <h3 style={{ color: '#1f2937' }}>All Players List</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '25px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Player Name</th>
            <th style={{ padding: '10px', textAlign: 'right' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #f3f4f6' }}>
              <td style={{ padding: '10px' }}>{player.name}</td>
              <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold' }}>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={{ color: '#047857' }}>Players with Score &gt;= 70 (High Scorers)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#d1fae5', borderBottom: '1px solid #a7f3d0' }}>
            <th style={{ padding: '10px', textAlign: 'left', color: '#065f46' }}>Player Name</th>
            <th style={{ padding: '10px', textAlign: 'right', color: '#065f46' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {highScorers.map((player, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '10px' }}>{player.name}</td>
              <td style={{ padding: '10px', textAlign: 'right', fontWeight: 'bold', color: '#047857' }}>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListofPlayers;
