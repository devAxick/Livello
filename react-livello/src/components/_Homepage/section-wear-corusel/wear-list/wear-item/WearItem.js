import React from "react";
import styles from './WearItem.module.css';

class WearItem extends React.Component {


    render() {
        const {wearItem} = this.props;

        return(
            <div className={styles.wearItem}>
                <div className="sizes-colors">
                    <ol className="size-list">
                        <li>size</li>
                        <li>M</li>
                        <li>L</li>
                        <li>xl</li>
                    </ol>

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