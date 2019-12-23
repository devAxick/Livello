import React, {Component} from 'react';
import './GenderCheckbox.css';

export default function (props){
    return(
        <div className="toggle-button toggle-button--sade">
            <input id={props.data} type="checkbox"/>
            <label htmlFor={props.data} data-on-text={props.data}></label>
            <div className="toggle-button__icon"></div>
        </div>
    )
}