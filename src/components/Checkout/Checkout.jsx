import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(store => store.cart);
  const customer = useSelector(store => store.customerData[0]);

  const handleCheckout = () => {
    const order = {
      customer_name: customer.customerName,
      street_address: customer.street,
      city: customer.city,
      zip: customer.zip,
      type: customer.orderType,
      total: cart.reduce((total, item) => total + parseFloat(item.price), 0),
      pizzas: cart.map(item => ({ id: item.id, quantity: 1 })),
  };

  axios.post('/api/order', order)
      .then(response => {
        console.log('Order posted successfully', response);
        dispatch({ type: 'CLEAR_CART' });
        dispatch({ type: 'CLEAR_CUSTOMER' }); 
        history.push('/');
      })
      .catch(error => {
        console.error('Error posting order', error);
        alert('There was an error processing your order. Please try again.');
      });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item, index) => <li key={index}>{item.name}: ${item.price}</li>)}
      </ul>
      <h3>Total: ${cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}</h3>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
