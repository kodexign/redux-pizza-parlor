import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const pizzas = (state = [], action) => {
  if (action.type === 'SET_PIZZAS') {
    return action.payload;
  }
  return state;
};

const cart = (state = [], action) => {
  if (action.type === 'ADD_TO_CART') {
    return [...state, action.payload];
  } else if (action.type === 'REMOVE_FROM_CART') {
    return state.filter(item => item.id !== action.payload);
  } else if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
};

const customerData = (state = [], action) => {
  if (action.type === 'ADD_CUSTOMER') {
    console.log('Customer info added');
    return [action.payload];
  } else if (action.type === 'CLEAR_CUSTOMER_DATA') {
    return [];
  }
  return state;
};

const store = createStore(
  combineReducers({
    pizzas,
    cart,
    customerData,
  }),
  applyMiddleware(logger),
);

export default store;
