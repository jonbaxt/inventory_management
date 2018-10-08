import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class NavBar extends Component {
    constructor(){
        super();

    }

    render(){
        return (
            <div className={css(st.navMain)}>
                <h3 className={css(st.h1Rev)}>The Inventory Warehouse</h3>
                <div className={css(st.rightSide)}>
                <h3 className={css(st.h1Rev)}>Add Product</h3>
                <h3 className={css(st.h1Rev)}>Users</h3>
                <h3 className={css(st.h1Rev)}>Clients</h3>
                <h3 className={css(st.h1Rev)}>Orders</h3>
                </div>
            </div>
        )
    }
}

const st = StyleSheet.create({
    navMain: {
        background: 'gray',
        width: '100%',
        height: '40px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '10px'
        // margin: 0,
        // padding: 0    
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
    },
    h1Rev: {
    margin: 0,
    padding: 0,
    marginLeft: '10px',
    marginRight: '30px'
    }
});

export default NavBar;