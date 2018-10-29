import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function OrderListobject(props) {
    let order_id = props.singleOrder.order_id;

    let product_sold_id = props.singleOrder.product_sold_id;
    let product_name = props.singleOrder.product_name;
    let part_number = props.singleOrder.part_number;
    let product_image = props.singleOrder.product_image;
    // let product_label = props.singleOrder.product_label;
    // let product_current_price = props.singleOrder.product_current_price;
    // let product_count_on_hand = props.singleOrder.product_count_on_hand;
    // let product_count_minimum_to_alert_to_order = props.singleOrder.product_count_minimum_to_alert_to_order;
    // let is_product_needing_to_notify_to_order_more_stock = props.singleOrder.is_product_needing_to_notify_to_order_more_stock;

    let buyer_id_number = props.singleOrder.purchaser_id;
    let buyer_first_name = props.singleOrder.buyer_first_name;
    let buyer_last_name = props.singleOrder.buyer_last_name;
    let buyer_company = props.singleOrder.buyer_company;
    let buyer_phone_number = props.singleOrder.buyer_phone_number;
    let buyer_email = props.singleOrder.buyer_email;
    // let buyer_comp_address_1 = props.singleOrder.buyer_comp_address_1;
    // let buyer_comp_address_2 = props.singleOrder.buyer_comp_address_2;
    // let buyer_mail_address_1 = props.singleOrder.buyer_mail_address_1;
    // let buyer_mail_address_2 = props.singleOrder.buyer_mail_address_2;

    let employee_seller_first_name = props.singleOrder.employee_seller_first_name;
    let employee_seller_last_name = props.singleOrder.employee_seller_last_name;
    let employee_title = props.singleOrder.employee_title;
    let seller_pic = props.singleOrder.seller_pic;
    let seller_phone_number = props.singleOrder.seller_phone_number;
    let seller_email = props.singleOrder.seller_email;

    // let date_ordered = props.singleOrder.date_ordered;
    // let date_shipped = props.singleOrder.date_shipped;
    // let date_recieved = props.singleOrder.date_recieved;

    // let completed = props.singleOrder.completed;
    // let order_notes = props.singleOrder.order_notes;
    return (
        <div className={css(orListCSS.mainListDiv)}>
            <span className={css(orListCSS.editorStylesDiv)}>
                <button className={css(orListCSS.editButton)} ><div
                    className={css(orListCSS.buttonText)}
                >Edit Order</div></button>
            </span>
            <span className={css(orListCSS.productInfoDiv)}>
                <h5 className={css(orListCSS.hStyle, orListCSS.texCen)}><span className={css(orListCSS.underLiner)}>Order #</span>{order_id} </h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Product DB ID:</span> {product_sold_id}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Product:</span> {product_name}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Part #</span>{part_number}</h5>
                <div className={css(orListCSS.flCent)}>
                    <img className={css(orListCSS.iconSize)} src={product_image} alt='' />
                    <button 
                    className={css(orListCSS.moreButton)}
                    onClick={() => {
                        props.switchMoreDetailsIDNumber(order_id);
                        props.toggleMoreDetails();
                    }}
                    >More</button>
                </div>
            </span>
            <span className={css(orListCSS.buyerInfoDiv)}>
                <h5 className={css(orListCSS.hStyle, orListCSS.underLiner, orListCSS.texCen)}>Buyer Information</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Buyer DB ID:</span> {buyer_id_number}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Buyer Name:</span> {buyer_first_name + ' ' + buyer_last_name}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Company:</span> {buyer_company}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Phone:</span> {buyer_phone_number}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Email:</span> {buyer_email}</h5>
                <div className={css(orListCSS.flCent)}>
                    <button className={css(orListCSS.moreButton, orListCSS.addressButtonAdjust)}>Addresses and History</button>
                </div>
            </span>
            <span className={css(orListCSS.sellerInfoDiv)}>
                <h5 className={css(orListCSS.hStyle, orListCSS.underLiner, orListCSS.texCen)}>Seller Information</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Employee Name:</span> {employee_seller_first_name + ' ' + employee_seller_last_name}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Title:</span> {employee_title}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Phone:</span> {seller_phone_number}</h5>
                <h5 className={css(orListCSS.hStyle)}><span className={css(orListCSS.underLiner)}>Email:</span> {seller_email}</h5>
                <img className={css(orListCSS.employeeIcon)} src={seller_pic} alt='' />
            </span>
        </div>
    )
}
const orListCSS = StyleSheet.create({
    mainListDiv: {
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'left',
        width: '99%',
        borderBottom: '1px solid black',
        '@media (max-width: 375px)': {
            width: '301px',
        },
    },
    editorStylesDiv: {
        width: '32px',
        height: '190px',
        background: 'rgb(128,128,128)',
    },
    editButton: {
        width: '100%',
        height: '100%',
        display: 'flex',
        margin: 0,
        color: 'white',
        justifyContent: 'flex-start',
        alignContent: 'initial',
        background: 'rgb(47,79,79)',
        border: 'none',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            background: 'white',
        },
    },
    moreButton: {
        width: '63%',
        height: '50px',
        marginTop: '25px',
        marginLeft: '5px',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
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
    addressButtonAdjust: {
        width: '96%',
        margin: 0,
        marginTop: '18px',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    },
    buttonText: {
        transform: 'rotate(90deg)',
        fontSize: '10px',
        fontWeight: 'bolder',
        margin: 0,
        padding: 0,
    },
    productInfoDiv: {
        width: '42%',
        height: '190px',
        overflow: 'hidden',
        boxShadow: '1px 1px 2px black',
        background: 'rgb(128,128,128)',
        color: 'white',
        textShadow: '1px 1px 2px black',
        '@media (max-width: 1220px)': {
            width: '265px',
        },
        '@media (max-width: 375px)': {
            width: '265px',
        }
    },
    buyerInfoDiv: {
        width: '22.1%',
        height: '190px',
        boxShadow: '1px 1px 2px black',
        background: 'rgb(128,128,118)',
        color: 'white',
        textShadow: '1px 1px 2px black',
        '@media (max-width: 1220px)': {
            width: '298px',
        },
        '@media (max-width: 375px)': {
            width: '298px',
        },
    },
    sellerInfoDiv: {
        width: '32%',
        height: '190px',
        boxShadow: '1px 1px 2px black',
        background: 'rgb(128,128,108)',
        color: 'white',
        textShadow: '1px 1px 2px black',
        '@media (max-width: 1220px)': {
            width: '298px',
        },
        '@media (max-width: 375px)': {
            width: '298px',
        },
    },
    hStyle: {
        margin: 0,
        marginLeft: '5px',

    },
    flCent: {
        display: 'flex',
        height: '99%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    underLiner: {
        textDecorationLine: 'underline',
    },
    texCen: {
        textAlign: 'center',
    },
    iconSize: {
        marginLeft: '30px',
        width: '80px',
    },
    employeeIcon: {
        margin: '0 auto',
        width: '90px'
    }
});
export default OrderListobject;