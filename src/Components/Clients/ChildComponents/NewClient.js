import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function NewClient() {

    return (
        <div>
            New Client Modal
        </div>
    )
}

const newCliCSS = StyleSheet.create({
    outerArea: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
    },
    hide: {
        visibility: 'hidden',
    },
    mainModal: {

    },
});