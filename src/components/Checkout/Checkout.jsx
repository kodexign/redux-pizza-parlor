import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector(store => store.cart);

  const handleCheckout = () => {
    dispatch({type: 'CLEAR_CART'});
  }

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item, index) => <li key={index}>{item.name}: ${item.price}</li>)}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Checkout;
