import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

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
      type: customer.deliveryMethod,
      total: cart.reduce((total, item) => total + parseFloat(item.price), 0),
      pizzas: cart.map(item => ({ id: item.id, quantity: 1 })),
    };
    axios.post('/api/order', order)
      .then(response => {
        console.log('Order posted successfully', response);
        dispatch({ type: 'CLEAR_CART' });
        dispatch({ type: 'CLEAR_CUSTOMER_DATA' });
        history.push('/');
      })
      .catch(error => {
        console.error('Error posting order', error);
        alert('There was an error processing your order. Please try again.');
      });
  };
  const OrangeButton = styled(Button)({
    borderRadius: '20px',
    width: '100%',
    padding: '10px 0',
    backgroundColor: '#FFA500',
    color: 'white',
    '&:hover': {
      backgroundColor: '#FF8C00',
    },
  });

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Checkout
      </Typography>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}: ${item.price}</li>
        ))}
      </ul>
      <Typography variant="h6">
        Total: $${cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}
      </Typography>
      <Box mt={4}>
        <OrangeButton onClick={handleCheckout}>
          Checkout
        </OrangeButton>
      </Box>
    </Container>
  );
};
export default Checkout;
