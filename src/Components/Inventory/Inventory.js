import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';

import InventoryItem from './ChildComponents/InventoryItem';
import ItemEditor from './ChildComponents/ItemEditor';
import NewInventoryItem from './ChildComponents/NewInventoryItem';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            currentInventory: [],
            itemEditorVisible: false,
            newItemVisible: false,
            currentProductNumber: 1,
        }
        this.toggleItemEditor = this.toggleItemEditor.bind(this);
        this.retrieveCurrentProductNumber = this.retrieveCurrentProductNumber.bind(this);
        this.toggleNewInventoryModal = this.toggleNewInventoryModal.bind(this);
    }

    componentDidMount() {
        axios.get('/api/getProducts').then((result) => {
            // axios.get('/testArray').then( (result) => {
            // console.log(result.data);
            // console.log(result.data.dummyTestData);
            this.setState({ currentInventory: result.data });
        }).catch(err => console.log(`Didn't work ${err}`))
    }

    toggleItemEditor() {
        this.setState({ itemEditorVisible: !this.state.itemEditorVisible });
    }
    toggleNewInventoryModal() {
        this.setState({ newItemVisible: !this.state.newItemVisible })
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
        let inventoryList = this.state.currentInventory.length !== 0 ? this.state.currentInventory.map((element, index) => {
            return (<InventoryItem key={element.inventory_id}
                currentInfo={element}
                // itemEditorVis={this.state.itemEditorVisible}
                giveBackFunction={this.retrieveCurrentProductNumber} />)
        }) : <h3 className={css(invCSS.h2Reformat)} >No Products Found. Please Refresh Browser.</h3>
        return (
            <div>
                <div className={css(invCSS.subNavBar)}>
                    <h4 className={css(invCSS.h2Reformat)}
                        onClick={()=> this.toggleNewInventoryModal()}>New Product</h4>
                </div>
                <ItemEditor inventory={this.state.currentInventory}
                    currentInventoryItem={this.state.currentProductNumber}
                    editorVisibility={this.state.itemEditorVisible}
                    toggleItemEditor={this.toggleItemEditor} />
                <NewInventoryItem
                    newInventoryItemVisibility={this.state.newItemVisible}
                    toggleNewInventory={this.toggleNewInventoryModal} />
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
        // paddingTop: '-20px',
    },
    subNavBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        postion: 'fixed',
        width: '100%',
        height: '26px',
        paddingTop: '50px',
        background: 'rgb(105,105,105)',
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
        }
    },
    h2Reformat: {
        margin: 0,
        marginRight: '30px',
        marginBottom: '15px',
        paddingTop: '2px',
        color: 'white',
        // cursor: 'pointer',
        textShadow: '2px 2px 4px black',
        // ':hover': {
            // color: 'rgb(169,169,169)',
            // transition: '0.5s all ease',
        // }
    }
});

export default Inventory;