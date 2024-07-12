import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/order')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log('Error fetching orders', error);
        alert('Error fetching orders');
      });
  }, []);

  return (
    <div>
      <h2>Admin - Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time order placed</th>
            <th>Type</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.customer_name}</td>
              <td>{new Date(order.time).toLocaleString()}</td>
              <td>{order.type}</td>
              <td>${parseFloat(order.total).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
