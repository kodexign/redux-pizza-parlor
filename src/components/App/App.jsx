import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SelectPizza from '../Select/Select';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../Customerinfo/Customerinfo';
import Admin from '../Admin/Admin';

import './App.css';
import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const NavButton = styled(Button)({
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: '#FFA500',
  color: 'white',
  '&:hover': {
    backgroundColor: '#FF8C00',
  },
  margin: '0 5px',
});

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position="static" style={{ backgroundColor: '#404040', marginBottom: '20px' }}>
          <Toolbar className="App-toolbar">
            <img src="/images/primepizza.png" alt="Prime Pizza" className="App-logo" />
            <Box className="App-nav" display="flex" justifyContent="center">
              <NavButton component={Link} to="/">Select Pizza</NavButton>
              <NavButton component={Link} to="/customerinfo">Customer Info</NavButton>
              <NavButton component={Link} to="/checkout">Checkout</NavButton>
              <NavButton component={Link} to="/admin">Admin</NavButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Container>
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
        </Container>
      </Router>
    </div>
  );
}

export default App;