import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function BuyerInformationAddressesAndHistory() {

    return (
        <div className={css(moreCSS.moreInfoMain)}>
            <section >
                
            </section>
        </div>
    )
}

export default BuyerInformationAddressesAndHistory;

const moreCSS = StyleSheet.create({
    moreInfoMain: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        // marginTop: '50px',
        marginTop: '-26px',
        color: 'white',
    },
    hide: {
        visibility: 'hidden',
    },
});