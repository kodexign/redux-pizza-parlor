import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Admin from'../Admin/Admin';
import Checkout from '../Checkout/Checkout';
import Customerinfo from '../Customerinfo/Customerinfo';
import Select from '../Select/Select';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={Select} />
          <Route path="/customerinfo" element={Customerinfo} />
          <Route path="/checkout" element={Checkout} />
          <Route path="/admin" element={Admin} />
        </Routes>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
      </Router>
    </div>
  );
}

export default App;
