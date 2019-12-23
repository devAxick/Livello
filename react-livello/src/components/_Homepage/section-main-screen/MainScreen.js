import React,{Component} from 'react';
import MainMenu from '../../main-menu/MainMenu';
import './MainScreen.css';

export default function () {
    return(
        <section id="mainScrImg">
            <MainMenu />
            <header>
                <h1>Livello</h1>
                <span>Our clothing - your comfort</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias blanditiis dicta
                    doloribus error eveniet incidunt ipsa magnam officiis praesentium, provident qui quisquam, rerum
                    saepe soluta, suscipit unde veritatis voluptates?</p>
            </header>

            <span className="mainArrow">
        </span>
        </section>
    )
}