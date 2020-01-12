import React, {Component} from 'react';
import SliderNavigation from "./slider-navigation/SliderNavigation";
import style from "./WearList.module.css";

import WearItem from "./wear-item/WearItem";
import {connect} from "react-redux";
import {wearFetchInfo} from "../../../../actions/info";
import {fetchCountWears} from "../../../../actions/countWears";

class WearList extends React.Component {

    componentDidMount(){
        this.props.fetchWear("/api/shoes");
        this.props.fetchCount("/api/weari");
    }

    render() {
        const {wearList, wearsCount} = this.props;

        return(
            <React.Fragment>
                <SliderNavigation amount={wearsCount.count}/>
                <div className={style.wearList}>
                    {wearList.map((wearItem) => {
                        return <WearItem key={wearItem._id} wearItem={wearItem}/>
                    })}
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return({
        wearList: state.wearList,
        wearsCount: state.countWears
    })
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchWear: url => dispatch(wearFetchInfo(url)),
        fetchCount: url => dispatch(fetchCountWears(url))
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(WearList)