import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';



function Client(props) {

    return (
        <div className={css(clientStyles.clientMain)}>
            <h2 className={css(clientStyles.textFormat)}>{`${props.clientInfo.first_name} ${props.clientInfo.last_name}`}</h2>
            <p className={css(clientStyles.textFormatP)} ><span className={css(clientStyles.boldUnderlined)}>Company</span> <br />{props.clientInfo.company}</p>
            <p className={css(clientStyles.textFormatP)} ><span className={css(clientStyles.boldUnderlined)}>Phone: </span>{props.clientInfo.phone_number}</p>
            <p className={css(clientStyles.textFormatP)} ><span className={css(clientStyles.boldUnderlined)}>Email:</span> {props.clientInfo.email}</p>
            {/* <h3 className={css(clientStyles.textFormatP)} ><span className={css(clientStyles.boldUnderlined)}>Company Address</span></h3> */}
            {/* <p className={css(clientStyles.textFormatP)} >{props.clientInfo.company_address_line_1}</p>
            <p className={css(clientStyles.textFormatP)} >{props.clientInfo.company_address_line_2}</p> */}
            {/* <p className={css(clientStyles.textFormatP)} >Email: {props.clientInfo.email}</p> */}
            <button onClick={()=>{
                props.getCurrentClient(props.clientInfo.client_id);
                props.toggleAddressVisible();
            } } 
            className={css(clientStyles.buttonFormatted)} >View Addresses</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        clientArray: state.clientArray
    }
}

export default  connect(mapStateToProps, null)(Client);

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
    textFormatP: {
        color: 'white',
        textShadow: '2px 2px 4px black',
        margin: 0,
        padding: 0,
        marginTop: '5px',
        fontSize: '14px',
    },
    boldUnderlined: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    buttonFormatted: {
        marginTop: '20px',
        marginBottom: '10px',
        width: '140px',
        height: '40px',
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