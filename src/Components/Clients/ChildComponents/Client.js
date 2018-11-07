import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import './Client.css';

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

            <span className={css(clientStyles.buttonSpan)}>


                <button className={css(clientStyles.buttonFormatted)}
                onClick={() => {
                    props.getCurrentClient(props.clientInfo.client_id);
                    props.toggleAddressVisible();
                }} >View Addresses</button>

                <div className='tripleCircles'
                onClick={() => {
                console.log('Clicked Editor Button');
                props.getCurrentClient(props.clientInfo.client_id);
                props.toggleEditVisible(); }} >
                    <div className='circleDiv'></div>
                    <div className='circleDiv'></div>
                    <div className='circleDiv'></div>
                    <span className='tooltip'>
                        <p>Edit Options</p>
                        <p>for {props.clientInfo.first_name}</p>
                    </span>
                </div>

            </span>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        clientArray: state.clientArray
    }
}

export default connect(mapStateToProps, null)(Client);

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
        width: '100px',
        height: '40px',
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
    buttonSpan: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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