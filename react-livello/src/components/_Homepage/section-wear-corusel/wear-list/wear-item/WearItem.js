import React, {useEffect} from "react";
import './WearItem.css';

import {connect} from 'react-redux';
import wearFetchInfo from "../../../../../actions/info";


class ABS extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchData("api/wear")
    }

    render() {
        return(
            <div className="wear-item">
                <div className="sizes-colors">
                    <ol className="size-list">
                        <li>size</li>
                        <li>M</li>
                        <li>L</li>
                        <li>xl</li>
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
}


const mapStateToProps = (state) => {
    return{
        wear: state.wear
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        fetchData: url => {
            return dispatch(wearFetchInfo(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ABS);