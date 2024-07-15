import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Select.css';

import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';



const SelectPizza = () => {
  const pizzas = useSelector(store => store.pizzas);
  const cart = useSelector(store => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/api/pizza')
      .then(response => {
        dispatch({ type: 'SET_PIZZAS', payload: response.data });
      })
      .catch(error => {
        console.log('Error Fetching', error);
        alert('Error Fetching');
      });
  }, [dispatch]);

  const addPizzaToCart = (pizza) => {
    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  const removePizzaFromCart = (pizzaId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: pizzaId });
  };

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);


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
        Step 1: Select Your Pizza
      </Typography>
      <Grid container spacing={4}>
        {pizzas.map(pizza => (
          <Grid item key={pizza.id} xs={12} sm={6} md={4}>
            <Card className="pizza-card">
              <CardMedia
                component="img"
                alt={pizza.name}
                height="140"
                image={pizza.image_path}
                title={pizza.name}
              />
              <CardContent className="pizza-card-content">
                <Typography gutterBottom variant="h5" component="h2">
                  {pizza.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {pizza.description}
                </Typography>
                <Typography variant="h6">
                  ${parseFloat(pizza.price).toFixed(2)}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="space-between" m={1} className="pizza-card-actions">
                {cart.find(item => item.id === pizza.id) ? (
                  <OrangeButton variant="contained" color="secondary" onClick={() => removePizzaFromCart(pizza.id)}>
                    Remove
                  </OrangeButton>
                ) : (
                  <OrangeButton variant="contained" color="primary" onClick={() => addPizzaToCart(pizza)}>
                    Add
                  </OrangeButton>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">
          Total: ${totalPrice}
        </Typography>
        <Link to="/customerinfo" style={{ textDecoration: 'none' }}>
          <OrangeButton variant="contained" color="primary">
            Next
          </OrangeButton>
        </Link>
      </Box>
    </Container>
  );
};

export default SelectPizza;
