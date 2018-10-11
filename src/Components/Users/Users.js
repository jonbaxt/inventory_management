import React from 'react';
import { StyleSheet, css } from 'aphrodite';



export default function Users() {
    return (
        <div className={css(userCSS.usersMain)}>
            <h1 className={css(userCSS.h1Text)}>Users</h1>
        </div>
    )
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