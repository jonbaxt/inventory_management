import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import logo from './logo.png'

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            navBarOpen: true,
        }
    }

    render() {
        return (
            <div className={css(st.navMain)}>
                <Link className={css(st.linkReformat)} to='/'>
                <img src={logo} alt='' className={css(st.picSizing)} />
                {/* <h3 className={css(st.h1Rev)}>Inventory Warehouse</h3> */}
                
                </Link>
                <div className={css(st.rightSide)}>

                    {/* <h3 className={css(st.h1Rev)}>Add Product</h3> */}

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
        background: 'rgb(128,128,128)',
        width: '100%',
        height: '40px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '14px',
        position: 'fixed',
        zIndex: '100',
        '@media (max-width: 700px)': {
            height: '32px',
        },
        '@media (max-width: 320px)': {
            height: '30px',
        },
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
    },
    h1Rev: {
        margin: 0,
        padding: 0,
        marginLeft: '10px',
        marginRight: '30px',
        textShadow: '2px 2px 4px black',
        ':hover': {
            color: 'rgb(169,169,169)',
            transition: '0.5s all ease',
        },
        '@media (max-width: 320px)': {
            fontSize: '12px',
            marginRight: '5px',
            marginLeft: '2px',
        },
    },
    linkReformat: {
        color: 'white',
        pointer: 'cursor',
        textDecorationLine: 'none'
    },
    picSizing: {
        position: 'fixed',
        top: '-2px',
        left: '10px',
        width: '70px',
        // ':hover': {
        //     background: 'white',
        // }
    },
});

export default NavBar;