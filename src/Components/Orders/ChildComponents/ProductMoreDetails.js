import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class ProductMoreDetails extends React.Component {

    render() {
        console.log(this.props)
        // let buyer_id_number = props.singleOrder.purchaser_id;
        // let buyer_first_name = props.singleOrder.buyer_first_name;
        // let buyer_last_name = props.singleOrder.buyer_last_name;
        // let buyer_company = props.singleOrder.buyer_company;
        // let buyer_phone_number = props.singleOrder.buyer_phone_number;
        // let buyer_email = props.singleOrder.buyer_email;
        // let buyer_comp_address_1 = props.singleOrder.buyer_comp_address_1;
        // let buyer_comp_address_2 = props.singleOrder.buyer_comp_address_2;
        // let buyer_mail_address_1 = props.singleOrder.buyer_mail_address_1;
        // let buyer_mail_address_2 = props.singleOrder.buyer_mail_address_2;

        // let employee_seller_first_name = props.singleOrder.employee_seller_first_name;
        // let employee_seller_last_name = props.singleOrder.employee_seller_last_name;
        // let employee_title = props.singleOrder.employee_title;
        // let seller_pic = props.singleOrder.seller_pic;
        // let seller_phone_number = props.singleOrder.seller_phone_number;
        // let seller_email = props.singleOrder.seller_email;

        let filteredOrders = this.props.ordersArrayPassDown.filter((element) => element.order_id === this.props.moreDetailsOrderId);
        let currentOrder = filteredOrders[0];


        let order_id = currentOrder.order_id;
        let product_sold_id = currentOrder.product_sold_id;
        let product_name = currentOrder.product_name;
        let part_number = currentOrder.part_number;
        let product_image = currentOrder.product_image;


        let product_label = currentOrder.product_label;
        let product_current_price = currentOrder.product_current_price;
        let product_count_on_hand = currentOrder.product_count_on_hand;
        let product_count_minimum_to_alert_to_order = currentOrder.product_count_minimum_to_alert_to_order;
        let is_product_needing_to_notify_to_order_more_stock = currentOrder.is_product_needing_to_notify_to_order_more_stock;


        let date_ordered = currentOrder.date_ordered;
        let date_shipped = currentOrder.date_shipped;
        let date_recieved = currentOrder.date_recieved;

        let completed = currentOrder.completed;
        let order_notes = currentOrder.order_notes;

        console.log(currentOrder)

        return (
            <div
                // onClick={() => this.props.toggleMoreDetails()}
                className={this.props.moreDetailsVisible ? css(moreCSS.moreInfoMain) : css(moreCSS.moreInfoMain, moreCSS.hide)}>
                <section className={css(moreCSS.moreInfoModalMain)} >
                    <div className={css(moreCSS.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            onClick={() => {
                                console.log('Clicked Close')
                                // this.resetInputs()
                                this.props.toggleMoreDetails()
                            }} /></div>

                    <h5 className={css(moreCSS.textRedone)}>Order #{order_id}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Product ID# {product_sold_id}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Name: {product_name}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Part #: {part_number}</h5>
                    <br />
                    <img className={css(moreCSS.imageSizing)} src={product_image} alt='' />
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Label: {product_label}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Price: ${product_current_price}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Count On Hand: {product_count_on_hand}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Minimum Product Needed for Stock: {product_count_minimum_to_alert_to_order}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Notifications: {is_product_needing_to_notify_to_order_more_stock ? 'Notify when product low' : 'Don`t notify when product low'}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Date Ordered: {date_ordered}</h5>
                    <h5 className={css(moreCSS.textRedone)}>Date Shipped: {date_shipped}</h5>
                    <h5 className={css(moreCSS.textRedone)}>Date Recieved: {date_recieved}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Order Complete: {completed ? 'Complete' : 'Not Complete'}</h5>
                    <br />
                    <h5 className={css(moreCSS.textRedone)}>Order Notes: {order_notes === '' ? 'No Notes' : order_notes}</h5>
                    <br />
                    <br />
                    <div >
                        <button className={css(moreCSS.closeButtonBottom)} onClick={() => this.props.toggleMoreDetails()} >Close</button>
                    </div>
                </section>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        ordersArray: state.ordersArray
    }
}

export default connect(mapStateToProps, null)(ProductMoreDetails);

const moreCSS = StyleSheet.create({
    moreInfoMain: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        // marginTop: '50px',
        marginTop: '-53px',
        color: 'white',
        zIndex: '101',
    },
    hide: {
        visibility: 'hidden',
    },
    moreInfoModalMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'auto',
        width: '40vw',
        height: '85vh',
        margin: '0 auto',
        marginTop: '80px',
        background: 'rgba(122,122,90,0.7)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    closeButton: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
        marginTop: '5px',
        marginRight: '5px',
        ':hover': {
            // transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            // background: 'white',
            // border: '2px solid rgb(47,79,79)',
        },
    },
    closeButtonBottom: {
        width: '100px',
        height: '50px',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            // transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    },
    textRedone: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    imageSizing: {
        width: '100px',
        margin: '0 auto',
    },
});