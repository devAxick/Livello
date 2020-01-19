import React, {useState} from "react";
import styles from "./../WearItem.module.css"
import $ from "jquery";


function SizeList(props) {

    const [openedList, setToggle] = useState(false);

    const toggleList = (event) => {
        setToggle(!openedList);
        console.log($(event.target).siblings())
        if(openedList){

        }
    };

    return(
        <ol className={styles.sizeList}>
            <li onClick={toggleList}>size</li>
            {props.sizeList.map(size => {
                return <li>{size}</li>
            })}
        </ol>
    )
}

export default SizeList