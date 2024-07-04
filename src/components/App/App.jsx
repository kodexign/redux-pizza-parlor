import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '../Admin/Admin';
import '../Checkout/Checkout';
import '../Customerinfo/Customerinfo';
import '../Select/Select';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Routes>
        <Route path="/" element={Select} />
        <Route path="/customerinfo" element={Customerinfo} />
        <Route path="/checkout" element={checkout} />
        <Route path="/admin" element={Admin} />
      </Routes>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
