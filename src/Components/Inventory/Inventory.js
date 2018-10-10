import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

import InventoryItem from './ChildComponents/InventoryItem';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            currentInventory: [],
        }
    }

    componentDidMount() {
        axios.get('/getProducts').then( (result) => {
        // axios.get('/testArray').then( (result) => {
            // console.log(result.data);
            // console.log(result.data.dummyTestData);
            this.setState({ currentInventory: result.data });
        } ).catch( err => console.log(`Didn't work ${err}`))
    }

    render() {
        // console.log(this.state.currentInventory);
        let inventoryList = this.state.currentInventory.map( (element, index) => {
            return (<InventoryItem key={element.inventory_id} currentInfo={element} />)
        })
        return (
            <div className={css(invCSS.main)} >
                { inventoryList }
                {/* <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem />
                <InventoryItem /> */}
                
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