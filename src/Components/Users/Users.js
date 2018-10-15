import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

import UserTiles from './ChildComponents/UserTiles';

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
        let dummyUser = {
            employee_id: 1,
            first_name: "Dave",
            last_name: "Thomas",
            id_pic: "https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg",
            phone_number: "801-888-2541",
            email: "dave@wendys.com",
            address_line_1: "123 E Wendys Lane",
            address_line_2: "Provo, UT 84601",
            employee_role: "Shelf Stocker"
        }
        let usersList = this.state.employeesArray.length !== 0 ?  this.state.employeesArray.map( element => {
            return (<UserTiles key={element.employee_id} userProfile={element} />)
        }) : <h3 className={css(userCSS.h1Text, userCSS.extraTextSpace)} >No Employees Found. Please Refresh Browser.</h3>
        return (
            <div className={css(userCSS.usersMain)}>
                <h1 className={css(userCSS.h1Text)}>Inventory Warehouse Employees</h1>
                <section className={css(userCSS.usersTable)}>
                { usersList }
                {/* <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} />
                <UserTiles userProfile={dummyUser} /> */}
                </section>
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
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    h1Text: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '2px 2px 4px black',
        // paddingTop: '51px',
    },
    extraTextSpace: {
        marginTop: '80px',
    },
    usersTable: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});