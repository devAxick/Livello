import React, {useEffect} from 'react';
import Home from './components/_Homepage/Home';
import Product from "./components/_Productpage/Product";
import {Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

import './css/reset.css';
import  './css/fonts.css';
import './App.css';
import {fetchWearItem} from "./actions/wear";




class App extends React.Component {

    componentDidMount() {
        this.props.loadFromStore('/api/wear')
    }
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/product' component={Product}/>
            </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        wear: state.wear
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        loadFromStore: (ulr) => {dispatch(fetchWearItem(ulr))}
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
