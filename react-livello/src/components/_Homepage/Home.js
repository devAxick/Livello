import React, {Component} from 'react';
import Section_MainScreen from './section-main-screen/MainScreen';
import Section_GenderFilter from "./section-gender-filter/GenderFilter";
import Section_WearCarousel from './section-wear-corusel/WearCorusel';


export default function () {
    return(
        <React.Fragment>
            <Section_MainScreen />
            <Section_GenderFilter />
            {/*<Section_WearCarousel/>*/}
        </React.Fragment>
    )
}