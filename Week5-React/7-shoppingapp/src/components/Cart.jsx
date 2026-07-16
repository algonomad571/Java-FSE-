import React, { Component } from 'react';

class Cart extends Component {
  render() {
    const { itemname, price } = this.props;
    return (
      <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
        <td style={{ padding: '12px 15px', color: '#374151', fontSize: '1.05rem' }}>{itemname}</td>
        <td style={{ padding: '12px 15px', color: '#111827', fontWeight: '600', textAlign: 'right' }}>${price}</td>
      </tr>
    );
  }
}

export default Cart;
