import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
// import { connect } from 'react-redux';

// import { getOrdersFromApi, getClientsFromApi, getUsersFromApi } from '../../ducks/reducer';

export default class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            ordersArray: [],
            clientsArray: [],
        };

    }

    componentDidMount() {
        
        axios.get('/api/getOrders').then((axiosResults)=> {
            console.log(axiosResults.data);
            this.setState({ ordersArray: axiosResults.data });
        }).catch(err => console.log(err));

        axios.get('/api/getClients').then((axiosResults) => {
            console.log(axiosResults.data);
            this.setState({ clientsArray: axiosResults.data });
        }).catch((err) => console.log(err));
    }

    render() {
        return (
            <div className={css(orderCSS.ordersMain)}>
                <h1 className={css(orderCSS.h1Text)}>Orders</h1>
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