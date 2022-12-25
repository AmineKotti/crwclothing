import './App.css';
import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import {  Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signIn' component={SignInAndSignUpPage} />

      </Switch>  
    </div>
  );
}

export default App;
