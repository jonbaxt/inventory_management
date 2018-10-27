import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

import Client from './ChildComponents/Client';
const dum = require('./ChildComponents/clientDummyData');

export default class Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            clientsArray: [],
        }
    }

    componentDidMount() {
        axios.get('/api/getClients').then((axiosResults) => {
            console.log(axiosResults.data);
            this.setState({ clientsArray: axiosResults.data });
        }).catch((err) => console.log(err));
    }

    render() {
        let dummyMaped = dum.clientData.map( element => {
            return <Client key={element.client_id} clientInfo={element}  />
        });

        let clientMapped = this.state.clientsArray.length !== 0 ? this.state.clientsArray.map( element => {
            return <Client key={element.client_id} clientInfo={element}  />
        }) : <h5 >No Employees Found. Please Refresh Browser.</h5>
        let dummyClient = {
            client_id: 1,
            first_name: "Rod",
            last_name: "Ferdinand",
            phone_number: "801-899-2456",
            email: "rodboy@generalgoods.com",
            company: "General Goods",
            company_address_line_1: "123 South 23 East",
            company_address_line_2: "Houston TX 77001",
            mailing_address_line_1: "123 South 23 East",
            mailing_address_line_2: "Houston TX 77001"
        }
        return (
            <div className={css(clientCSS.clientMain)}>
                <h1 className={css(clientCSS.h1Text)}>Clients</h1>
                <div className={css(clientCSS.clientsTable)} >
                    {dummyMaped}
                    {/* {clientMapped} */}
                </div>
            </div>
        )

    }
}

const clientCSS = StyleSheet.create({
    clientMain: {
        margin: 0,
        padding: 0,
        paddingTop: '50px',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    clientsTable: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    h1Text: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '2px 2px 4px black',
    },
});