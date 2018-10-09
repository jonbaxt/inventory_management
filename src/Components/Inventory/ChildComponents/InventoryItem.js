import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function InventoryItem() {

    let productName = 'Grapes';
    let partNumber = '000EF';
    let inStock = 5;
    let minRequired = 1;
    let itemPrice = 2.99
    let imageAddress = 'https://www.fast-growing-trees.com/images/P/Concord-Grape-450w.jpg';
    let label = 'Yummy delicious grapes that anybody would enjoy. Grandmas love them, babies love them, lovers love them, everybody loves them. That and they are healthy part of a balanced meal for each day of the week. Make sure you get your fruit in with grapes!';
    return(
        <div className={css(itemCSS.main)}>
            <h4 className={css(itemCSS.h4Reform)}>Product: {productName}</h4>
            <h4 className={css(itemCSS.h4Reform)}>Part Number: {partNumber}</h4>
            <h4 className={css(itemCSS.h4Reform)}>How many in Stock: {inStock}</h4>
            <h4 className={css(itemCSS.h4Reform)}>Minimum Required: {minRequired}</h4>
            <h4 className={css(itemCSS.h4Reform)}>Price: ${itemPrice}</h4>
            
            <img className={css(itemCSS.imgRes)}
            src={imageAddress} alt='' />
            
            <h6 className={css(itemCSS.h6Reform)}>Label Information: {label}</h6>
        </div>
    )
}

const itemCSS = StyleSheet.create({
    main: {
        display: 'flex',
        // justifyContent: 'center',
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
    h6Reform: {
        margin: 0,
        marginBottom: '15px',
    },
    imgRes: {
        width: '80px',
        margin: '0 auto',
        // display: 'flex',
        // justifyContent: 'center',
    }
});