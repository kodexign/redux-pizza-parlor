import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SelectPizza from '../Select/Select';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../Customerinfo/Customerinfo';
import Admin from '../Admin/Admin';

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
              <Link to="/customerinfo">Customer Info</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
          <Route exact path="/">
            <SelectPizza />
          </Route>
          <Route exact path="/customerinfo">
            <CustomerInfo />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
