import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SelectPizza from '../Select/Select';
import Checkout from '../Checkout/Checkout';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Select Pizza</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
          <Route exact path="/">
            <SelectPizza />
          </Route>
          <Route exact path="/customerinfo">            
          </Route>
          <Route exact path="/checkout">            
            <Checkout />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
