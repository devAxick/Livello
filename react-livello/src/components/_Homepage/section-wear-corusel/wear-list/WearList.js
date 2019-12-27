import React, {Component} from 'react';
import SliderNavigation from "./slider-navigation/SliderNavigation";
import WearItem from "./wear-item/WearItem";

export default function () {
    return(
        <React.Fragment>
            <SliderNavigation />
            <div className="wear-list">
                <WearItem/>

            </div>
        </React.Fragment>
    )
}