import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  render() {
    // Array of 5 items with name and price
    const items = [
      { id: 1, itemname: 'MacBook Pro 14"', price: 1999 },
      { id: 2, itemname: 'iPhone 15 Pro Max', price: 1199 },
      { id: 3, itemname: 'iPad Pro 11"', price: 799 },
      { id: 4, itemname: 'Apple Watch Series 9', price: 399 },
      { id: 5, itemname: 'AirPods Pro 2', price: 249 }
    ];

    return (
      <div style={{ maxWidth: '500px', margin: '30px auto', padding: '25px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)', border: '1px solid #e5e7eb', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
        <h2 style={{ color: '#111827', margin: '0 0 20px 0', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', textAlign: 'center' }}>
          Online Shopping Cart
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9fafb', borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ padding: '12px 15px', textAlign: 'left', color: '#4b5563', fontWeight: '600' }}>Item Name</th>
              <th style={{ padding: '12px 15px', textAlign: 'right', color: '#4b5563', fontWeight: '600' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <Cart key={item.id} itemname={item.itemname} price={item.price} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;
