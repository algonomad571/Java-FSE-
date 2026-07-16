import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    // Bind methods
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  UpdateEntry() {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  UpdateExit() {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', border: '1px solid #e5e7eb', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#111827', margin: '0 0 25px 0', borderBottom: '2px solid #e5e7eb', paddingBottom: '12px' }}>
          Visitor Counter Dashboard
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '35px' }}>
          <div style={{ padding: '20px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '12px', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#065f46' }}>Total Entry</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#047857' }}>
              {this.state.entrycount}
            </div>
          </div>
          <div style={{ padding: '20px', backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '12px', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#991b1b' }}>Total Exit</h4>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#b91c1c' }}>
              {this.state.exitcount}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button 
            onClick={this.UpdateEntry} 
            style={{ flex: 1, padding: '12px 24px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(16,185,129,0.2)' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#059669'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#10b981'}
          >
            Login (Enter)
          </button>
          <button 
            onClick={this.UpdateExit} 
            style={{ flex: 1, padding: '12px 24px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: '600', cursor: 'pointer', transition: 'background-color 0.2s', boxShadow: '0 2px 4px rgba(239,68,68,0.2)' }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
          >
            Exit (Leave)
          </button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
