import React from 'react';
import Home from './components/_Homepage/Home';
import Product from "./components/_Productpage/Product";
import {Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import './css/reset.css';
import  './css/fonts.css';
import './App.css';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
      <Provider store={store}>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/product' component={Product}/>
          </Switch>
      </Provider>

  );
}

export default App;
