import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const validateField = (fieldName, value) => {
    let errorMsg = '';
    if (fieldName === 'name') {
      if (value.length < 5) {
        errorMsg = 'Name must be at least 5 characters long.';
      }
    } else if (fieldName === 'email') {
      if (!value.includes('@') || !value.includes('.')) {
        errorMsg = 'Email must contain "@" and "." symbols.';
      }
    } else if (fieldName === 'password') {
      if (value.length < 8) {
        errorMsg = 'Password must be at least 8 characters long.';
      }
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    const errorMsg = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateField('name', formData.name);
    const emailError = validateField('email', formData.email);
    const passwordError = validateField('password', formData.password);

    if (nameError || emailError || passwordError) {
      setErrors({
        name: nameError,
        email: emailError,
        password: passwordError
      });
      alert('Please fix the validation errors before submitting.');
      return;
    }

    setSubmitted(true);
    alert('Registration Successful!\n\nWelcome ' + formData.name);
  };

  return (
    <div style={{ maxWidth: '450px', margin: '30px auto', padding: '30px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2 style={{ color: '#111827', margin: '0 0 20px 0', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', textAlign: 'center' }}>
        Create Account
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Name Field */}
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#4b5563', fontWeight: '600' }}>Name:</label>
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name" 
            style={{ width: '100%', padding: '10px', border: `1px solid ${errors.name ? '#ef4444' : '#d1d5db'}`, borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
          />
          {errors.name && <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#4b5563', fontWeight: '600' }}>Email Address:</label>
          <input 
            type="text" 
            name="email"
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email" 
            style={{ width: '100%', padding: '10px', border: `1px solid ${errors.email ? '#ef4444' : '#d1d5db'}`, borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
          />
          {errors.email && <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div>
          <label style={{ display: 'block', marginBottom: '6px', color: '#4b5563', fontWeight: '600' }}>Password:</label>
          <input 
            type="password" 
            name="password"
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Enter a strong password" 
            style={{ width: '100%', padding: '10px', border: `1px solid ${errors.password ? '#ef4444' : '#d1d5db'}`, borderRadius: '6px', fontSize: '1rem', boxSizing: 'border-box' }}
          />
          {errors.password && <span style={{ color: '#dc2626', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>{errors.password}</span>}
        </div>

        <button 
          type="submit" 
          style={{ padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s', marginTop: '10px' }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#3730a3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
