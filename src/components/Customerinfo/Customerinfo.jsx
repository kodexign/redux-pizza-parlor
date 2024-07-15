import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Customerinfo.css';

import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

function CustomerInfo() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    const [customerName, setCustomerName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (customerName === "" || street === "" || city === "" || !zip) {
            alert("Empty field, Please complete all fields");
            return;
        }
        dispatch({
            type: 'ADD_CUSTOMER', payload: { customerName, street, city, zip, deliveryMethod },
        });
        history.push('/checkout');
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
      
      const DeliveryButton = styled(Button)(({ selected }) => ({
        borderRadius: '20px',
        width: '45%',
        padding: '10px 0',
        backgroundColor: selected ? '#FFA500' : 'transparent',
        color: selected ? 'white' : '#FFA500',
        border: `2px solid ${selected ? '#FFA500' : '#FFA500'}`,
        '&:hover': {
          backgroundColor: selected ? '#FF8C00' : 'transparent',
        },
      }));

      return (
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Step 2: Customer Information
          </Typography>
          <Typography variant="h6">
            Total: ${totalPrice}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Customer Name"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Street Address"
              value={street}
              onChange={(event) => setStreet(event.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="City"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              margin="normal"
            />
            <TextField
              fullWidth
              label="ZIP Code"
              value={zip}
              onChange={(event) => setZip(event.target.value)}
              margin="normal"
            />
            <Box display="flex" justifyContent="space-around" mt={2}>
              <DeliveryButton 
                selected={deliveryMethod === 'pickup'} 
                onClick={() => setDeliveryMethod('pickup')}
              >
                Pick-Up
              </DeliveryButton>
              <DeliveryButton 
                selected={deliveryMethod === 'delivery'} 
                onClick={() => setDeliveryMethod('delivery')}
              >
                Delivery
              </DeliveryButton>
            </Box>
            <Box mt={4}>
              <OrangeButton type="submit">
                Next
              </OrangeButton>
            </Box>
          </form>
        </Container>
      );
    };

export default CustomerInfo;
