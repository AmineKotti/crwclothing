import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {  Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
      <ShopPage/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>  
    </div>
  );
}

export default App;
