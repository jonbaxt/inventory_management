import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import { connect } from 'react-redux';

import {
    getOrdersFromApi,
    //  getClientsFromApi, 
    //  getUsersFromApi
} from '../../ducks/reducer';

import OrderListObject from './ChildComponents/OrderListObject';

class Orders extends React.Component {

    componentDidMount() {
        if (this.props.ordersArray.length === 0) {
            this.props.getOrdersFromApi();
        }
        // axios.get('/api/getOrders').then((axiosResults)=> {
        //     console.log(axiosResults.data);
        //     this.setState({ ordersArray: axiosResults.data });
        // }).catch(err => console.log(err));

        axios.get('/api/getClients').then((axiosResults) => {
            console.log(axiosResults.data);
            this.setState({ clientsArray: axiosResults.data });
        }).catch((err) => console.log(err));
    }

    render() {
        let orderListDisplay = dummyData.map(element => {
            return (<OrderListObject key={element.order_id} singleOrder={element} />)
        })
        return (
            <div className={css(orderCSS.ordersMain)}>
                <h1 className={css(orderCSS.h1Text)}>Orders</h1>
                {orderListDisplay}
            </div>
        )
    }
}

const orderCSS = StyleSheet.create({
    ordersMain: {
        width: '100%',
        padding: 0,
        margin: 0,
        paddingTop: '50px',
    },
    h1Text: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '2px 2px 4px black',
    }
});

let mapStateToProps = (state) => {
    return {
        ordersArray: state.ordersArray,
    }
}
let mapDispatchToProps = {
    getOrdersFromApi,
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);


const dummyData = [
    {
        order_id: 1,
        product_sold_id: 1,
        product_name: "POP Heroes: Batman vs Superman - Wonder Woman Action Figure (Collectible figure)",
        part_number: "E00FE",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/51nkI-uBA6L.jpg",
        product_label: "From the hit movie Batman vs Superman: Dawn of Justice, Wonder Woman, as a stylized POP vinyl from Funko!",
        product_current_price: "9.50",
        product_count_on_hand: 10,
        product_count_minimum_to_alert_to_order: 2,
        is_product_needing_to_notify_to_order_more_stock: true,
        purchaser_id: 1,
        buyer_first_name: "Rod",
        buyer_last_name: "Ferdinand",
        buyer_company: "General Goods",
        buyer_phone_number: "801-899-2456",
        buyer_email: "rodboy@generalgoods.com",
        buyer_comp_address_1: "123 South 23 East",
        buyer_comp_address_2: "Houston TX 77001",
        buyer_mail_address_1: "123 South 23 East",
        buyer_mail_address_2: "Houston TX 77001",
        employee_seller_id: 1,
        employee_seller_first_name: "Dave",
        employee_seller_last_name: "Thomas",
        employee_title: "Shelf Stocker",
        seller_pic: "https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg",
        seller_phone_number: "801-888-2541",
        seller_email: "dave@wendys.com",
        date_ordered: "2018-05-01T06:00:00.000Z",
        date_shipped: "2018-05-02T06:00:00.000Z",
        date_recieved: "2018-05-03T06:00:00.000Z",
        completed: true,
        order_notes: "no notes"
    },
    {
        order_id: 2,
        product_sold_id: 3,
        product_name: "Funko POP Heroes Classic Batman Action Figure",
        part_number: "E000F",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/41qdDvyhAmL.jpg",
        product_label: "From DC Heroes, Classic Batman, as a stylized POP vinyl from Funko. Stylized collectable stands 3 ¾ inches tall, perfect for any DC Heroes fan. Collect and display all DC Heroes POP Vinyls.",
        product_current_price: "10.99",
        product_count_on_hand: 5,
        product_count_minimum_to_alert_to_order: 2,
        is_product_needing_to_notify_to_order_more_stock: true,
        purchaser_id: 2,
        buyer_first_name: "Dean",
        buyer_last_name: "Thomas",
        buyer_company: "Disney Enterprises",
        buyer_phone_number: "414-000-3213",
        buyer_email: "dthomas@disney.go.com",
        buyer_comp_address_1: "100 South Buena Vista Road",
        buyer_comp_address_2: "Los Angeles CA 90001",
        buyer_mail_address_1: "100 South Buena Vista Road",
        buyer_mail_address_2: "Los Angeles CA 90001",
        employee_seller_id: 1,
        employee_seller_first_name: "Dave",
        employee_seller_last_name: "Thomas",
        employee_title: "Shelf Stocker",
        seller_pic: "https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg",
        seller_phone_number: "801-888-2541",
        seller_email: "dave@wendys.com",
        date_ordered: "2018-10-01T06:00:00.000Z",
        date_shipped: "2018-10-03T06:00:00.000Z",
        date_recieved: null,
        completed: false,
        order_notes: "Wanted, one day shipping, it was unfortunately before a holdiay."
    },
    {
        order_id: 3,
        product_sold_id: 4,
        product_name: "Funko POP Heroes: Batman vs Superman - Batman Action Figure",
        part_number: "E0000",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/41BbTiIg9vL.jpg",
        product_label: "From the hit movie Batman vs Superman: Dawn of Justice, Batman, as a stylized POP vinyl from Funko! Stylized collectable stands 3 3/4 inches tall, perfect for any Batman, Superman, or DC fan! Collect and display all Batman vs Superman Pop! Vinyl`s!",
        product_current_price: "10.50",
        product_count_on_hand: 3,
        product_count_minimum_to_alert_to_order: 2,
        is_product_needing_to_notify_to_order_more_stock: true,
        purchaser_id: 5,
        buyer_first_name: "Rudy",
        buyer_last_name: "Anderson",
        buyer_company: "Orem Target",
        buyer_phone_number: "801-812-2000",
        buyer_email: "rudyinorem@target.com",
        buyer_comp_address_1: "100 E Center St",
        buyer_comp_address_2: "Orem, UT 84058",
        buyer_mail_address_1: "100 E Center St",
        buyer_mail_address_2: "Orem, UT 84058",
        employee_seller_id: 1,
        employee_seller_first_name: "Dave",
        employee_seller_last_name: "Thomas",
        employee_title: "Shelf Stocker",
        seller_pic: "https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg",
        seller_phone_number: "801-888-2541",
        seller_email: "dave@wendys.com",
        date_ordered: "2018-10-02T06:00:00.000Z",
        date_shipped: "2018-10-04T06:00:00.000Z",
        date_recieved: null,
        completed: false,
        order_notes: ""
    },
    {
        order_id: 4,
        product_sold_id: 2,
        product_name: "Funko Batman The Animated Series Robin Pop Heroes Figure",
        part_number: "E00FF",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/41D5b2RnHLL.jpg",
        product_label: "From Batman The Animated Series, Robin, as a stylized POP vinyl from Funko. Stylized collectable stands 3 ¾ inches tall, perfect for any Batman The Animated Series fan. Collect and display all Batman The Animated Series POP Vinyls.",
        product_current_price: "7.30",
        product_count_on_hand: 9,
        product_count_minimum_to_alert_to_order: 2,
        is_product_needing_to_notify_to_order_more_stock: true,
        purchaser_id: 3,
        buyer_first_name: "Rand",
        buyer_last_name: "Paul",
        buyer_company: "Senator of the USA",
        buyer_phone_number: "921-222-9009",
        buyer_email: "rand@randpaul.com",
        buyer_comp_address_1: "10 E. Capitol Hill",
        buyer_comp_address_2: "Washington DC 20001",
        buyer_mail_address_1: "1000 W. 1400 S.",
        buyer_mail_address_2: "Louisville, KY 40018",
        employee_seller_id: 2,
        employee_seller_first_name: "Thomas",
        employee_seller_last_name: "Cat",
        employee_title: "Security",
        seller_pic: "https://banner2.kisspng.com/20171218/38b/tom-and-jerry-png-5a37adb327b907.5548566515135983871627.jpg",
        seller_phone_number: "no number",
        seller_email: "tommy@cat.me",
        date_ordered: "2018-10-05T06:00:00.000Z",
        date_shipped: "2018-10-07T06:00:00.000Z",
        date_recieved: null,
        completed: false,
        order_notes: ""
    },
    {
        order_id: 5,
        product_sold_id: 1,
        product_name: "POP Heroes: Batman vs Superman - Wonder Woman Action Figure (Collectible figure)",
        part_number: "E00FE",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/51nkI-uBA6L.jpg",
        product_label: "From the hit movie Batman vs Superman: Dawn of Justice, Wonder Woman, as a stylized POP vinyl from Funko!",
        product_current_price: "9.50",
        product_count_on_hand: 10,
        product_count_minimum_to_alert_to_order: 2,
        is_product_needing_to_notify_to_order_more_stock: true,
        purchaser_id: 6,
        buyer_first_name: "Chance",
        buyer_last_name: "Sharp",
        buyer_company: "JP Morgan Salt Lake City",
        buyer_phone_number: "801-200-2121",
        buyer_email: "chance@jpmmorganc.com",
        buyer_comp_address_1: "5 W 200 S",
        buyer_comp_address_2: "Salt Lake Ciy, UT 84044",
        buyer_mail_address_1: "5 W 200 S",
        buyer_mail_address_2: "Salt Lake Ciy, UT 84044",
        employee_seller_id: 2,
        employee_seller_first_name: "Thomas",
        employee_seller_last_name: "Cat",
        employee_title: "Security",
        seller_pic: "https://banner2.kisspng.com/20171218/38b/tom-and-jerry-png-5a37adb327b907.5548566515135983871627.jpg",
        seller_phone_number: "no number",
        seller_email: "tommy@cat.me",
        date_ordered: "2018-09-01T06:00:00.000Z",
        date_shipped: "2018-09-03T06:00:00.000Z",
        date_recieved: "2018-09-05T06:00:00.000Z",
        completed: true,
        order_notes: ""
    },
    {
        order_id: 6,
        product_sold_id: 1,
        product_name: "POP Heroes: Batman vs Superman - Wonder Woman Action Figure (Collectible figure)",
        part_number: "E00FE",
        product_image: "https://images-na.ssl-images-amazon.com/images/I/51nkI-uBA6L.jpg",
        product_label: "From the hit movie Batman vs Superman: Dawn of Justice, Wonder Woman, as a stylized POP vinyl from Funko!",
        product_current_price: "9.50",
        product_count_on_hand: 10,
        product_count_minimum_to_alert_to_order: 2,
        is_product_needing_to_notify_to_order_more_stock: true,
        purchaser_id: 4,
        buyer_first_name: "Todd",
        buyer_last_name: "Christensen",
        buyer_company: "Orem Walmart",
        buyer_phone_number: "801-202-4715",
        buyer_email: "todd201827@yahoo.com",
        buyer_comp_address_1: "100 E Sandhill RD",
        buyer_comp_address_2: "Orem, UT 84058",
        buyer_mail_address_1: "100 E Sandhill RD",
        buyer_mail_address_2: "Orem, UT 84058",
        employee_seller_id: 2,
        employee_seller_first_name: "Thomas",
        employee_seller_last_name: "Cat",
        employee_title: "Security",
        seller_pic: "https://banner2.kisspng.com/20171218/38b/tom-and-jerry-png-5a37adb327b907.5548566515135983871627.jpg",
        seller_phone_number: "no number",
        seller_email: "tommy@cat.me",
        date_ordered: "2018-09-03T06:00:00.000Z",
        date_shipped: "2018-09-05T06:00:00.000Z",
        date_recieved: "2018-09-07T06:00:00.000Z",
        completed: true,
        order_notes: ""
    }
];