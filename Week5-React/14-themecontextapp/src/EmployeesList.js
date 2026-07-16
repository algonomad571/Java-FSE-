import React from 'react';
import EmployeeCard from './EmployeeCard';

function EmployeesList(props) {
    return (
        <div>
            <h1 style={{ color: '#111827', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px' }}>
                Employees List
            </h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {
                    props.employees.map(employee =>
                        <EmployeeCard employee={employee} key={employee.id} />
                    )
                }
            </div>
        </div>
    );
}

export default EmployeesList;
