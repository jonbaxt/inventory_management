import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import InventoryItem from './ChildComponents/InventoryItem';

class Inventory extends Component {

    render() {
        return (
            <div className={css(invCSS.main)} >

                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                
            </div>
        )
    }
}

const invCSS = StyleSheet.create({
    main: {
        display: 'flex',
        justifyContent: 'center',
        border: 'solid 1px black',
        flexWrap: 'wrap',

    }
});

export default Inventory;