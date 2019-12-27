import React from "react";
import './SlidreNavigation.css';

export default function () {
    return(
        <div className="slider-navigation">
            <span>1/5</span>
            <span>
                    <button className="prev-btn"/>
                    <button className="nxt-btn"/>
                </span>
        </div>
    )
}