import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import '../../Clients/ChildComponents/Client.css'

export default function InventoryItem(props) {
    // Dummy Data, will be replaced by actual data with passing propss.
    let productName = 'Grapes';
    let partNumber = '000EF';
    // let inStock = 5;
    // let minRequired = 1;
    let itemPrice = 2.99
    let imageAddress = 'https://www.fast-growing-trees.com/images/P/Concord-Grape-450w.jpg';
    // let label = 'Yummy delicious grapes that anybody would enjoy. Grandmas love them, babies love them, lovers love them, everybody loves them. That and they are healthy part of a balanced meal for each day of the week. Make sure you get your fruit in with grapes!';

    // console.log(props.currentInfo);
    // console.log(props)
    productName = props.currentInfo.product_name;
    partNumber = props.currentInfo.part_number;
    // inStock = props.currentInfo.current_count;
    // minRequired = props.currentInfo.minimum_stock;
    itemPrice = props.currentInfo.price;
    imageAddress = props.currentInfo.product_image;
    // label = props.currentInfo.product_label;
    // let alertBelowMin = props.currentInfo.alert_when_low;
    // let currentAlertStatus = alertBelowMin ? 'Alert when below minimum' : 'Will not alert when below minimum';

    return (
        <div className={css(itemCSS.main)}>
            <div className={css(itemCSS.topArea)}>

                <p className={css(itemCSS.h4Reform)}> <br /> {productName}</p>

                {/* <span className={css(itemCSS.breakLine)} ></span> */}

                <p className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Part Number:</span> {partNumber}</p>

                {/* <span className={css(itemCSS.breakLine)} ></span> */}

                {/* <p className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>How many in Stock:</span> {inStock}</p> */}

                {/* <span className={css(itemCSS.breakLine)} ></span> */}
                {/* <p className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Minimum Required:</span> {minRequired}</p> */}

                {/* <span className={css(itemCSS.breakLine)} ></span> */}

                <p className={css(itemCSS.h4Reform)}><span className={css(itemCSS.extraReform)}>Price:</span> ${itemPrice}</p>

                {/* <span className={css(itemCSS.breakLine)} ></span> */}

                <img className={css(itemCSS.imgRes)}
                    src={imageAddress} alt='' />
                {/* <span className={css(itemCSS.breakLine)} ></span> */}
                {/* <h6 className={css(itemCSS.h6Reform)}>Label Information: {label}</h6> */}
                {/* <span className={css(itemCSS.breakLine)} ></span> */}
                {/* <h4 className={css(itemCSS.h4Reform, itemCSS.alignCentered)} >{currentAlertStatus}</h4> */}

            </div>
            <div className={css(itemCSS.bottomButtons)}>
                <button className={css(itemCSS.buttonSubmit)}
                    onClick={() => {
                        props.giveBackFunctionForMoreButton(props.currentInfo.inventory_id);
                    }}>More</button>
                <button className='tripleCircles'
                    onClick={() => {
                        // console.log('Button Clicked')
                        props.giveBackFunction(props.currentInfo.inventory_id);
                    }}>
                    <div className='circleDiv'></div>
                    <div className='circleDiv'></div>
                    <div className='circleDiv'></div>
                </button>
            </div>

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
        textAlign: 'center',
        // boxShadow: '1px 1px 2px rgb(119,136,153)',
        boxShadow: '1px 1px 2px grey',
    },
    h4Reform: {
        margin: 0,
        marginTop: '2px',
        textAlign: 'center',
        marginLeft: '10px',
        marginRight: '10px',

    },
    alignCentered: {
        textAlign: 'center',
    },
    extraReform: {
        textDecorationLine: 'underline',
    },
    h6Reform: {
        margin: 0,
        marginBottom: '15px',
    },
    imgRes: {
        width: '150px',
        margin: '0 auto',
    },
    breakLine: {
        width: '290px',
        height: '1.5px',
        background: 'white',
        margin: '0 auto'
    },
    topArea: {
        width: '100%',
        // height: '300px',
        
        // border: '3px dashed pink',
    },
    bottomButtons: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'center',
        alignItems: "flex-end",
        height: '100%',
        // position: 'absolute',
        // bottom: '5px',
        paddingBottom: '15px',
        
        // border: '3px dotted yellow',
    },
    buttonRedesign: {
        background: 'lightgray',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        ':hover': {
            color: 'rgb(169,169,169)',
            transition: '0.5s all ease',
        },
    },
    buttonSubmit: {
        marginTop: '20px',
        // marginBottom: '10px',
        // paddingBottom: '5px',
        width: '60px',
        height: '36px',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderWidth: '2px 0.5px 2px 2px',
        borderRadius: '10px 0px 0px 10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    },
});