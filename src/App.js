import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/product/:id" component={ ProductDetail } />
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
