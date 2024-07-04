import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Select.css';

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

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div>
      <h2>Step 1: Select Your Pizza</h2>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <div key={pizza.id} className="pizza-item">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>${pizza.price}</p>
            {cart.find(item => item.id === pizza.id) ? (
              <button onClick={() => removePizzaFromCart(pizza.id)}>Remove</button>
            ) : (
              <button onClick={() => addPizzaToCart(pizza)}>Add</button>
            )}
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <Link to="/Customerinfo"><button>Next</button></Link>
      </div>
    </div>
  );
};

export default SelectPizza;
