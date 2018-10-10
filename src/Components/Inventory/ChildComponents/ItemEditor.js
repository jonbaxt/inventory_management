import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function ItemEditor(props) {
    console.log(props);

    let productDetails = props.inventory.filter( (product) => product.inventory_id === props.currentInventoryItem);
    
    let detailsObject = '';
    let productName = '';
    let partNumber = '';
    let itemPrice = '';
    let label = '';
    let productCount = '';
    if(props.inventory.length !== 0){
        detailsObject = productDetails[0];
        console.log(detailsObject);
        productName = detailsObject.product_name;
        partNumber = detailsObject.part_number;
        itemPrice = detailsObject.item_price;
        label = detailsObject.product_label;
        productCount = detailsObject.current_count;
    }


    console.log('Details', detailsObject);
    return (
        <div className={ props.editorVisibility ?  css(editorCSS.editorMain) : css(editorCSS.editorMain, editorCSS.editorHide) }
        // onClick={()=> props.toggleItemEditor()}
         >

            <section className={css(editorCSS.editorModalMain )}
            // onClick={()=> console.log('Don`t click out')}
             >
            <h2 className={css(editorCSS.h2Form)}>Product Details Editor</h2>
            <h3 className={css(editorCSS.h3Form)}>Product # {props.currentInventoryItem}</h3>
            <h3 className={css(editorCSS.h3Form)}>Name: {productName}</h3>
            <h3 className={css(editorCSS.h3Form)}>Part # {partNumber}</h3>
            <h3 className={css(editorCSS.h3Form)}>Label / Description:  {label} </h3>
            <h3 className={css(editorCSS.h3Form)}>Current Inventory Count: {productCount}</h3>
            <h3 className={css(editorCSS.h3Form)}>Minimum Product Required on Hand: </h3>
            <h3 className={css(editorCSS.h3Form)}>Price: { itemPrice }</h3>
            <h3 className={css(editorCSS.h3Form)}>Product Image:</h3>
            </section>

        </div>
    )
}

const editorCSS = StyleSheet.create({
    editorMain: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    // Down here is for the editor
    editorModalMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        width: '75vw',
        height: '90vh',
        margin: '0 auto',
        marginTop: '5px',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    h2Form: {
        margin: '15px 0px 15px 0px',
        padding: 0,
        textShadow: '2px 2px 4px black',
    },
    h3Form: {
        margin: '5px 0px 5px 10px',
        padding: 0,
        textAlign: 'left',
        textShadow: '1px 1px 1.5px black',
    },
});