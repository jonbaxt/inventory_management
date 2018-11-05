import React from 'react';
import { StyleSheet, css } from 'aphrodite';

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

export default function ClientAddress(props) {
    console.log(props.currentClientViewed);
    return (
        <div className={ props.clientAddressesVisible ?  css(addressCSS.mainModal) : css(addressCSS.mainModal, addressCSS.hidden) }>
            <div className={css(addressCSS.modelBox)}>
            <p>{props.currentClientViewed.first_name + ' ' + props.currentClientViewed.last_name}</p>
            <br />
            <p>{props.currentClientViewed.company}</p>
            <br />
            <p>Company Address</p>
            <p>{props.currentClientViewed.company_address_line_1}</p>
            <p>{props.currentClientViewed.company_address_line_2}</p>
            <br />
            <p>Mailing Address</p>
            <p>{props.currentClientViewed.mailing_address_line_1}</p>
            <p>{props.currentClientViewed.mailing_address_line_2}</p>
            
            <button onClick={()=> props.toggleAddressVisible() }>Close</button>
            </div>
        </div>
    )
}
const addressCSS = StyleSheet.create({
    mainModal: {
        visibility: 'visible',
        position: 'fixed',
        zIndex: '101',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        color: 'green',
        marginTop: '-48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hidden: {
        visibility: 'hidden',
    },
    modelBox: {
        width: '80%',
        height: '70vh',
        zIndex: '102',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
    },
});