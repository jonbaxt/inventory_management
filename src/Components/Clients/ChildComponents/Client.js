import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import Clients from '../Clients';

function Client(props) {

    return (
        <div className={css(clientStyles.clientMain)}>
            <h2 className={css(clientStyles.textFormat)}>{`${props.clientInfo.first_name} ${props.clientInfo.last_name}`}</h2>
            <p className={css(clientStyles.textFormat)} ><span className={css(clientStyles.boldUnderlined)}>Company: </span>{props.clientInfo.company}</p>
            <p className={css(clientStyles.textFormat)} ><span className={css(clientStyles.boldUnderlined)}>Phone: </span>{props.clientInfo.phone_number}</p>
            <p className={css(clientStyles.textFormat)} ><span className={css(clientStyles.boldUnderlined)}>Email:</span> {props.clientInfo.email}</p>
            <h3 className={css(clientStyles.textFormat)} ><span className={css(clientStyles.boldUnderlined)}>Company Address</span></h3>
            <p className={css(clientStyles.textFormat)} >{props.clientInfo.company_address_line_1}</p>
            <p className={css(clientStyles.textFormat)} >{props.clientInfo.company_address_line_2}</p>
            {/* <p className={css(clientStyles.textFormat)} >Email: {props.clientInfo.email}</p> */}
            <button >View More</button>
        </div>
    )
}

export default Client;

const clientStyles = StyleSheet.create({
    clientMain: {
        width: '220px',
        // height: '300px',
        background: 'rgba(119,136,153,1)',
        boxShadow: '2px 2px 4px black',
        margin: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '5px',
        paddingRight: '5px',
    },
    textFormat: {
        color: 'white',
        textShadow: '2px 2px 4px black',
        margin: 0,
        padding: 0
    },
    boldUnderlined: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

/*
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
*/