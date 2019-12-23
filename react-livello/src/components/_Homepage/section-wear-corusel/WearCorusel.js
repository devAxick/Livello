import React, {Component} from 'react';
import './WearCarousel.css';

export default function () {
    return(
        <section id="men-wear">
            <div className="wrapper-men-wear">

                <div className="slider-navigation">
                    <span>1/5</span>
                    <span>
                    <button className="prev-btn"></button>
                    <button className="nxt-btn"></button>
                </span>
                </div>
                <div className="wear-list">
                    <div className="wear-item">
                        <div className="sizes-colors">
                            <ol className="size-list">
                                <li>size</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ol>
                            <ol className="color-list">
                                <li className="color" style="background: yellow"></li>
                                <li className="color" style="background: blue"></li>
                                <li className="color" style="background: violet"></li>
                            </ol>
                        </div>
                        <img src="./img/wears/t-shirt.jpg" alt="t-shirt"/>
                            <div className="name-price">
                                <span className="name-wear">t-shirt</span>
                                <span className="price-wear">5.99 </span>
                            </div>
                    </div>

                    <div className="wear-item">
                        <div className="sizes-colors">
                            <ol className="size-list">
                                <li>size</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ol>
                            <ol className="color-list">
                                <li className="color" style="background: yellow"></li>
                                <li className="color" style="background: blue"></li>
                                <li className="color" style="background: violet"></li>
                            </ol>
                        </div>
                        <img src="./img/wears/t-shirt.jpg" alt="t-shirt"/>
                            <div className="name-price">
                                <span className="name-wear">t-shirt</span>
                                <span className="price-wear">5.99 </span>
                            </div>
                    </div>

                    <div className="wear-item">
                        <div className="sizes-colors">
                            <ol className="size-list">
                                <li>size</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                            </ol>
                            <ol className="color-list">
                                <li className="color" style="background: yellow"></li>
                                <li className="color" style="background: blue"></li>
                                <li className="color" style="background: violet"></li>
                            </ol>
                        </div>
                        <img src="./img/wears/t-shirt.jpg" alt="t-shirt"/>
                            <div className="name-price">
                                <span className="name-wear">t-shirt</span>
                                <span className="price-wear">5.99 </span>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}