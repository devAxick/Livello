import React from 'react';
import Home from './components/_Homepage/Home';
import Product from "./components/_Productpage/Product";

import {Switch, Route} from 'react-router-dom';
import './css/reset.css';
import  './css/fonts.css';
import './App.css';

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/product' component={Product}/>
      </Switch>
  );
}

export default App;
