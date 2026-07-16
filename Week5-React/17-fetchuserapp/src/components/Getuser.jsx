import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          userData: data.results[0],
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          error: err.message,
          loading: false
        });
      });
  }

  render() {
    const { userData, loading, error } = this.state;

    if (loading) {
      return (
        <div style={{ textAlign: 'center', padding: '30px', fontFamily: 'Segoe UI, sans-serif' }}>
          <h3 style={{ color: '#4b5563' }}>Loading user details...</h3>
        </div>
      );
    }

    if (error) {
      return (
        <div style={{ color: '#dc2626', backgroundColor: '#fef2f2', padding: '20px', borderRadius: '8px', border: '1px solid #fee2e2', textAlign: 'center', fontFamily: 'Segoe UI, sans-serif' }}>
          <h3>Error Loading User</h3>
          <p>{error}</p>
        </div>
      );
    }

    const { name, picture, email, location } = userData;

    return (
      <div style={{ maxWidth: '400px', margin: '30px auto', backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', fontFamily: 'Segoe UI, sans-serif', overflow: 'hidden' }}>
        <div style={{ height: '100px', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)' }}></div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-60px', padding: '20px' }}>
          <img 
            src={picture.large} 
            alt={`${name.first} ${name.last}`} 
            style={{ width: '120px', height: '120px', borderRadius: '50%', border: '4px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          />
          <h3 style={{ margin: '15px 0 5px 0', color: '#111827', fontSize: '1.4rem' }}>
            {name.title}. {name.first} {name.last}
          </h3>
          <p style={{ margin: '0 0 15px 0', color: '#6b7280', fontSize: '0.95rem' }}>
            {email}
          </p>
          <div style={{ width: '100%', borderTop: '1px solid #f3f4f6', paddingTop: '15px', marginTop: '5px', textAlign: 'center', color: '#4b5563', fontSize: '0.9rem' }}>
            <strong>Location:</strong> {location.city}, {location.country}
          </div>
        </div>
      </div>
    );
  }
}

export default Getuser;
