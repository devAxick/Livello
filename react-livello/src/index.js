import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers/index'
import WearItem from "./components/_Homepage/section-wear-corusel/wear-list/wear-item/WearItem";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
    <React.Fragment>
        {/*<BrowserRouter>*/}
        {/*    <App />*/}
        {/*</BrowserRouter>*/}
        <Provider store={store}>
            <WearItem/>
        </Provider>
    </React.Fragment>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
