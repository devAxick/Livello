import React from "react";
import styles from './WearItem.module.css';
import SizeList from "./size-list/SizeList";

class WearItem extends React.Component {


    render() {
        const {wearItem} = this.props;

        return(
            <div className={styles.wearItem}>
                <div className={styles.sizesColors}>
                    <SizeList sizeList={[37,38,39]}/>

                    {/*<ol className="color-list">*/}
                    {/*    <li className="color" style="background: yellow"/>*/}
                    {/*    <li className="color" style="background: blue"/>*/}
                    {/*    <li className="color" style="background: violet"/>*/}
                    {/*</ol>*/}
                </div>
                <img src={wearItem.images[0]} alt=""/>
                <div className={styles.namePrice}>
                    <span className={styles.nameWear}>{wearItem.name}</span>
                    <span className={styles.priceWear}>{wearItem.price}</span>
                </div>
            </div>
        )
    }
}


export default WearItem;