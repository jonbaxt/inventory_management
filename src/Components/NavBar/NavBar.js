import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            navBarOpen: true,
        }
    }

    render(){
        return (
            <div className={css(st.navMain)}>
                <Link className={css(st.linkReformat)} to='/'><h3 className={css(st.h1Rev)}>The Inventory Warehouse</h3></Link>
                <div className={css(st.rightSide)}>
                
                <h3 className={css(st.h1Rev)}>Add Product</h3>
                <Link className={css(st.linkReformat)} to='/users'>
                <h3 className={css(st.h1Rev)}>Users</h3>
                </Link>
                
                <Link className={css(st.linkReformat)} to='/clients' >
                <h3 className={css(st.h1Rev)}>Clients</h3>
                </Link>
                
                <Link className={css(st.linkReformat)} to='/orders'>
                <h3 className={css(st.h1Rev)}>Orders</h3>
                </Link>
                
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
    },
    linkReformat: {
        color: 'white',
        pointer: 'cursor',
        textDecorationLine: 'none'
    },  
});

export default NavBar;