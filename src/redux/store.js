import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
//const someReducer = (state = [], action) => {
  //return state;
//}
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
  if (action.type === 'ADD_CUSTOMER'){
    console.log('Customer info added');
    return [...state,, action.payload];
  }
  return state;
}

const store = createStore(
  combineReducers({
    //someReducer, // 👈 Be sure to replace this, too!
    pizzas,
    cart,
    customerData,
  }),
  applyMiddleware(logger),
);


export default store;
