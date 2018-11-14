import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function MoreInfo(props) {
    let currentItemArr = props.inventory.filter( (elem) => elem.inventory_id === props.currentInventoryItem );
    let productDetails = '';
    let idNumber = '';
    let productName = '';
    let partNumber = '';
    let productLabel = '';
    let productImage = '';
    let currentCount = '';
    let minimumStock = '';
    let price = '';
    let alertWhenLow = '';
    if(props.inventory.length !== 0) {
        productDetails = currentItemArr[0];
        idNumber = productDetails.inventory_id;
        productName = productDetails.product_name;
        partNumber = productDetails.part_number;
        productLabel = productDetails.product_label;
        productImage = productDetails.product_image;
        currentCount = productDetails.current_count;
        minimumStock = productDetails.minimum_stock;
        price = productDetails.price;
        alertWhenLow = productDetails.alert_when_low;
    }
    let prodImg = productImage !== '' ?  <img className={css(styles.imgSize)} src={productImage} alt='' /> : <h3 className={css(styles.textDone)}>No Image for Product Found</h3>

    let alertMess = alertWhenLow ? <h3 className={css(styles.textDone)}>Alert when product is low.</h3> : <h3 className={css(styles.textDone)}>Will not alert when low.</h3>
    return (
        <div className={props.moreInfoVisible ? css(styles.outer) : css(styles.outer, styles.hide)}>
            <section className={css(styles.modal)} >
                <div className={css(styles.closeButtonTop)}>
                    <span className={css(styles.closeButton)}
                        onClick={() => { props.toggleMoreInfoModal(); }}>Close</span>
                </div>
                <div className={css(styles.bodyArea)} >
                <br />
                <h1 className={css(styles.textDone)}>Product #{idNumber}</h1>
                <h1 className={css(styles.textDone)}>{productName}</h1>
                <h4 className={css(styles.textDone)}>Part #{partNumber}</h4>
                <br />
                <h5 className={css(styles.textDone)}>Label Description: {productLabel}</h5>
                <br />
                {/* <h4 className={css(styles.textDone)}>{productImage}</h4> */}
                <span className={css(styles.flexMid)}>
                {prodImg}
                </span>
                <br />
                <h4 className={css(styles.textDone)}>Products On Hand: {currentCount}</h4>
                <h4 className={css(styles.textDone)}>Minimum Products Needed: {minimumStock}</h4>
                <h4 className={css(styles.textDone)}>Price of Item: ${price}</h4>
                {/* <h4 className={css(styles.textDone)}></h4> */}
                {alertMess}
                </div>
            </section>
        </div>
    )
}

const styles = StyleSheet.create({
    outer: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '101',
        color: 'white',
    },
    hide: {
        visibility: 'hidden',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'auto',
        width: '95vw',
        margin: '0 auto',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '102',
    },
    flexMid: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '30vh',
        alignItems: 'center',
    },
    closeButton: {
        width: '100px',
        height: '29px',
        background: 'black',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px gray',        
        cursor: 'pointer',
    },
    closeButtonTop: {
        width: '100%',
        height: '30px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    bodyArea: {
        width: '98%',
        display: 'flex',
        flexDirection: 'column',
    },
    textDone: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    imgSize: {
        height: '100%',
    },
});

export default MoreInfo;