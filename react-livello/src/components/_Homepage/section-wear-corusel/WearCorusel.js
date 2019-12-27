import React, {Component} from 'react';
import './WearCarousel.css';
import HeaderWithLine from './header-with-line/HeaderWithLine';
import WearList from "./wear-list/WearList";

export default function () {
    return(
        <section id="men-wear">
            <div className="wrapper-men-wear">
                <HeaderWithLine />
                <WearList/>
            </div>
        </section>
    )
}