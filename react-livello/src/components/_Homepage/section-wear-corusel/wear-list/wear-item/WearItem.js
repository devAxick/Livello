import React from "react";
import './WearItem.css';

import {connect} from 'react-redux';


function ABS(props) {
    return(
        <div className="wear-item">
            <div className="sizes-colors">
                <ol className="size-list">
                    <li>size</li>
                    <li>M</li>
                    <li>L</li>
                    <li>{props.user}</li>
                </ol>
                {/*<ol className="color-list">*/}
                {/*    <li className="color" style="background: yellow"/>*/}
                {/*    <li className="color" style="background: blue"/>*/}
                {/*    <li className="color" style="background: violet"/>*/}
                {/*</ol>*/}
            </div>
            {/*<img src="./img/wears/t-shirt.jpg" alt="t-shirt"/>*/}
            <div className="name-price">
                <span className="name-wear">t-shirt</span>
                <span className="price-wear">5.99 </span>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        user: state.info.user
    }
}

export default connect(mapStateToProps)(ABS);