import React, {useState} from "react";
import style from'./SlidreNavigation.module.css';

export default function (props) {
    const [count, setCount] = useState(1);

    function setCounter(expr){
        if((count + expr) <= 1){
            setCount(1)
        }else{
            setCount(count + expr)
        }
    }

    return(
        <div className={style.sliderNavigation}>
            <span>{count}</span>
            <div className={style.btnWrapper}>
                    <button className={style.prevBtn} onClick={() => setCounter(+1)}/>
                    <button className={style.nxtBtn} onClick={() => setCounter(-1)}/>
            </div>
        </div>
    )
}

// {props.amount}