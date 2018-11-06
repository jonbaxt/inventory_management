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
            <br />
            <h1 className={css(addressCSS.textFormat)}>Client Addresses</h1>
            <br />
            <h1 className={css(addressCSS.textFormat)}>{props.currentClientViewed.first_name + ' ' + props.currentClientViewed.last_name}</h1>
            <br />
            <h3 className={css(addressCSS.textFormat)}>Company</h3>
            <p className={css(addressCSS.textFormat)}>{props.currentClientViewed.company}</p>
            <br />
            <h3 className={css(addressCSS.textFormat)}>Company Address</h3>
            <p className={css(addressCSS.textFormat)}>{props.currentClientViewed.company_address_line_1}</p>
            <p className={css(addressCSS.textFormat)}>{props.currentClientViewed.company_address_line_2}</p>
            <br />
            <h3 className={css(addressCSS.textFormat)}>Mailing Address</h3>
            <p className={css(addressCSS.textFormat)}>{props.currentClientViewed.mailing_address_line_1}</p>
            <p className={css(addressCSS.textFormat)}>{props.currentClientViewed.mailing_address_line_2}</p>
            <br />
            <br />
            <button className={css(addressCSS.closeButton)} onClick={()=> props.toggleAddressVisible() }>Close</button>
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
        width: '310px',
        height: '65vh',
        zIndex: '102',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
    },
    textFormat: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,        
    },
    closeButton: {
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        padding: '10px',
        cursor: 'pointer',
        ':hover': {
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    }
});