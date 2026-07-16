import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#1f2937', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
          Student Management Portal
        </h2>
        <div style={{ marginTop: '20px' }}>
          <Home />
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
