import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, Goal }) {
  // Let's assume total score is out of 500, so average is Total / 5
  const average = (Total / 5).toFixed(2);
  const status = average >= Goal ? 'Passed / Goal Achieved' : 'Failed / Goal Not Achieved';
  const statusClass = average >= Goal ? 'status-pass' : 'status-fail';

  return (
    <div className="score-card">
      <h3 className="score-header">Student Score Details</h3>
      <div className="score-body">
        <p><strong>Name:</strong> {Name}</p>
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Marks:</strong> {Total} / 500</p>
        <p><strong>Goal Average:</strong> {Goal}%</p>
        <p><strong>Calculated Average:</strong> <span className="average-val">{average}%</span></p>
        <p><strong>Status:</strong> <span className={`status-badge ${statusClass}`}>{status}</span></p>
      </div>
    </div>
  );
}

export default CalculateScore;
