import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import axios from 'axios';


export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            employeesArray: []
        }
    }

    componentDidMount() {
        axios.get('/api/getEmployees').then( (axiosResults) => {
            console.log( axiosResults.data );
            this.setState({ employeesArray: axiosResults.data });
        }).catch( (err) => { console.log(err) });
    }

    render() {

        return (
            <div className={css(userCSS.usersMain)}>
                <h1 className={css(userCSS.h1Text)}>Users</h1>
            </div>
        )
    }
}

const userCSS = StyleSheet.create({
    usersMain: {
        margin: 0,
        padding: 0,
        paddingTop: '50px',
        width: '100%',
        border: '1px solid black',

    },
    h1Text: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '2px 2px 4px black',
        // paddingTop: '51px',
    }
});