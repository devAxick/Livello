import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MainMenu.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart, faMountain} from "@fortawesome/free-solid-svg-icons";

export default function () {
    return (
        <nav id="mainMenu">
            <span><Link exec to="/"><FontAwesomeIcon icon={faMountain} /></Link></span>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
            </ul>
        </nav>
    )
}