import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import './App.css';

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
