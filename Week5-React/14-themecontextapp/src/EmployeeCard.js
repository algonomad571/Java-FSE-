import React, { useContext } from 'react';
import Styles from './EmployeeCard.module.css';
import ThemeContext from './ThemeContext';

function EmployeeCard(props) {
    const theme = useContext(ThemeContext);

    // Dynamic style based on theme value
    const buttonStyle = {
        padding: '6px 12px',
        marginRight: '10px',
        textDecoration: 'none',
        borderRadius: '4px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        display: 'inline-block',
        backgroundColor: theme === 'dark' ? '#1f2937' : '#e5e7eb',
        color: theme === 'dark' ? '#f9fafb' : '#374151',
        border: theme === 'dark' ? '1px solid #374151' : '1px solid #d1d5db'
    };

    return (
        <div className={Styles.Card} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#111827' }}>{props.employee.name}</h3>
            <p style={{ margin: '4px 0', color: '#4b5563', fontSize: '0.95rem' }}><strong>Email:</strong> {props.employee.email}</p>
            <p style={{ margin: '4px 0', color: '#4b5563', fontSize: '0.95rem' }}><strong>Phone:</strong> {props.employee.phone}</p>
            <p style={{ margin: '15px 0 0 0' }}>
                <a href="#" style={buttonStyle} className={theme}>Edit</a> 
                <a href="#" style={buttonStyle} className={theme}>Delete</a> 
            </p>
        </div>
    );
}

export default EmployeeCard;
