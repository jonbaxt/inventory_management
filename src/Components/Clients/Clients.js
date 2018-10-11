import React from 'react';
import { StyleSheet, css } from 'aphrodite';


export default function Clients() {

    return (
        <div className={css(clientCSS.clientMain)}>
            <h1 className={css(clientCSS.h1Text)}>Clients</h1>
        </div>
    )
}

const clientCSS = StyleSheet.create({
    clientMain: {
        margin: 0,
        padding: 0,
        paddingTop: '50px',
    },
    h1Text: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '2px 2px 4px black',
    },
});