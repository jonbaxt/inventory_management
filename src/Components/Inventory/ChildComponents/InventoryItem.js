import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function InventoryItem(prop) {

    let productName = 'Grapes';
    let partNumber = '000EF';
    let inStock = 5;
    let minRequired = 1;
    let itemPrice = 2.99
    let imageAddress = 'https://www.fast-growing-trees.com/images/P/Concord-Grape-450w.jpg';
    let label = 'Yummy delicious grapes that anybody would enjoy. Grandmas love them, babies love them, lovers love them, everybody loves them. That and they are healthy part of a balanced meal for each day of the week. Make sure you get your fruit in with grapes!';

    console.log(prop.currentInfo);
    productName = prop.currentInfo.product_name;
    partNumber = prop.currentInfo.part_number;
    inStock = prop.currentInfo.current_count;
    minRequired = prop.currentInfo.minimum_stock;
    itemPrice = prop.currentInfo.price;
    imageAddress = prop.currentInfo.product_image;
    label = prop.currentInfo.product_label;
    let alertBelowMin = prop.currentInfo.alert_when_low;
    let currentAlertStatus = alertBelowMin ? 'Alert when below minimum' : 'Will not alert when below minimum';

    return(
        <div className={css(itemCSS.main)}>
            <h4 className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Product:</span> {productName}</h4>
            <span className={css(itemCSS.breakLine)} ></span>
            <h4 className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Part Number:</span> {partNumber}</h4>
            <span className={css(itemCSS.breakLine)} ></span>
            <h4 className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>How many in Stock:</span> {inStock}</h4>
            <span className={css(itemCSS.breakLine)} ></span>
            <h4 className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Minimum Required:</span> {minRequired}</h4>
            <span className={css(itemCSS.breakLine)} ></span>
            <h4 className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Price:</span> ${itemPrice}</h4>
            <span className={css(itemCSS.breakLine)} ></span>
            
            <img className={css(itemCSS.imgRes)}
            src={imageAddress} alt='' />
            <span className={css(itemCSS.breakLine)} ></span>
            <h6 className={css(itemCSS.h6Reform)}>Label Information: {label}</h6>
            <span className={css(itemCSS.breakLine)} ></span>
            <h4 className={css(itemCSS.h4Reform)} >{currentAlertStatus}</h4>
        </div>
    )
}

const itemCSS = StyleSheet.create({
    main: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: '5px',
        background: 'rgba(47,79,79, 0.8)',
        color: 'white',
        width: '315px',
        // height: '280px',
        border: 'solid 1px green',     
    },
    h4Reform: {
        margin: 0,
        marginTop: '2px',
    },
    extraReform: {
        textDecorationLine: 'underline',
    },
    h6Reform: {
        margin: 0,
        marginBottom: '15px',
    },
    imgRes: {
        width: '80px',
        margin: '0 auto',
        // display: 'flex',
        // justifyContent: 'center',
    },
    breakLine: {
        width: '290px',
        height: '1.5px',
        background: 'white',
        margin: '0 auto'
    },
});