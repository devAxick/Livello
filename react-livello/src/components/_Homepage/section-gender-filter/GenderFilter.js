import React from 'react';
import './GenderFilter.css';
import GenderCheckbox from "../gender-checkbox/GenderCheckbox";
import {Link} from 'react-router-dom';


export default function () {
    return(
        <section id="genderFilter">
            <div className="wrapper-genderFilter">
                <div className="gender-wrap">
                    <GenderCheckbox data={'men'}/>
                    <GenderCheckbox data={'women'}/>
                    <GenderCheckbox data={'children'}/>
                </div>
                <Link to='/product' className="btn-all-prod">see all products</Link>
            </div>
        </section>
    )
}