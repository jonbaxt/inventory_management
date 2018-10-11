import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

import InventoryItem from './ChildComponents/InventoryItem';
import ItemEditor from './ChildComponents/ItemEditor';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            currentInventory: [],
            itemEditorVisible: false,
            currentProductNumber: 1,
        }
        this.toggleItemEditor = this.toggleItemEditor.bind(this);
        this.retrieveCurrentProductNumber = this.retrieveCurrentProductNumber.bind(this);
    }

    componentDidMount() {
        axios.get('/getProducts').then((result) => {
            // axios.get('/testArray').then( (result) => {
            // console.log(result.data);
            // console.log(result.data.dummyTestData);
            this.setState({ currentInventory: result.data });
        }).catch(err => console.log(`Didn't work ${err}`))
    }

    toggleItemEditor() {
        this.setState({ itemEditorVisible: !this.state.itemEditorVisible });
    }

    retrieveCurrentProductNumber(prodNum) {
        console.log('Current Product Number: ', prodNum);
        this.setState({ currentProductNumber: prodNum });
        this.toggleItemEditor();
        // console.log(`Item Editor Visability: ${this.state.itemEditorVisible}`)
    }

    render() {
        // console.log(this.state.currentInventory);
        // console.log(this.props)
        let inventoryList = this.state.currentInventory.map((element, index) => {
            return (<InventoryItem key={element.inventory_id}
                currentInfo={element}
                // itemEditorVis={this.state.itemEditorVisible}
                giveBackFunction={this.retrieveCurrentProductNumber} />)
        })
        return (
            <div>
                    <ItemEditor inventory={this.state.currentInventory}
                        currentInventoryItem={this.state.currentProductNumber}
                        editorVisibility={this.state.itemEditorVisible}
                        toggleItemEditor={this.toggleItemEditor} />
                <h1 className={css(invCSS.h2Reformat)} >Current Inventory</h1>
                <div className={css(invCSS.main)} >
                    {inventoryList}
                </div>
            </div>
        )
    }
}

const invCSS = StyleSheet.create({
    main: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // paddingTop: '50px',
    },
    h2Reformat: {
        margin: 0,
        marginBottom: '15px',
        paddingTop: '50px',
        color: 'white',
        textShadow: '2px 2px 4px black',
    }
});

export default Inventory;