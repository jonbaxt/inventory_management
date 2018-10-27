import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import axios from 'axios';
import { connect } from 'react-redux';

import InventoryItem from './ChildComponents/InventoryItem';
import ItemEditor from './ChildComponents/ItemEditor';
import NewInventoryItem from './ChildComponents/NewInventoryItem';
import { getProductsFromApi, getClientsFromApi, getUsersFromApi, getOrdersFromApi } from '../../ducks/reducer';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            // currentInventory: [],
            itemEditorVisible: false, // Switch back to false
            newItemVisible: false,
            currentProductNumber: 1,
        }
        this.toggleItemEditor = this.toggleItemEditor.bind(this);
        this.retrieveCurrentProductNumber = this.retrieveCurrentProductNumber.bind(this);
        this.toggleNewInventoryModal = this.toggleNewInventoryModal.bind(this);
        this.postNewProduct = this.postNewProduct.bind(this);
    }

    componentDidMount() {
        // First retrieval essential for home page. rest of the other Axios calls are to help the website to run faster after loaded.
        if (this.props.productsArray.length === 0) {
            this.props.getProductsFromApi();
            this.setState({ currentInventory: this.props.productsArray });
        }
        if (this.props.ordersArray.length === 0) {
            this.props.getOrdersFromApi();
        }
        if (this.props.usersArray.length === 0) {
            this.props.getUsersFromApi();
        }
        if (this.props.clientsArray.length === 0) {
            this.props.getClientsFromApi();
        }
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.productsArray.length !== this.props.productsArray.length) {
    //         this.setState({ currentInventory: this.props.productsArray });
    //     }
    // }

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

    postNewProduct(productObject) {
        axios.post('/api/newproduct/insert', productObject).then(newProductTable => {
            console.log(newProductTable.data);
            this.setState({ currentInventory: newProductTable.data });
        }).catch((err) => console.log('Didn`t work:', err));
    }

    render() {
        let inventoryList = this.props.productsArray.length !== 0 ? this.props.productsArray.map((element, index) => {
            return (<InventoryItem key={element.inventory_id}
                currentInfo={element}
                giveBackFunction={this.retrieveCurrentProductNumber} />)
        }) : <h3 className={css(invCSS.h2Reformat)} >No Products Found. Please Refresh Browser.</h3>
        
        return (
            <div>
                <div className={css(invCSS.subNavBar)}>
                    <h4 className={css(invCSS.h2Reformat, invCSS.hand)}
                        onClick={() => this.toggleNewInventoryModal()}>New Product</h4>
                </div>
                <ItemEditor inventory={this.props.productsArray}
                    currentInventoryItem={this.state.currentProductNumber}
                    editorVisibility={this.state.itemEditorVisible}
                    toggleItemEditor={this.toggleItemEditor} />
                <NewInventoryItem
                    newInventoryItemVisibility={this.state.newItemVisible}
                    toggleNewInventory={this.toggleNewInventoryModal}
                    postNewProduct={this.postNewProduct} />
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
    hand: {
        cursor: 'pointer',
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

function mapStateToProps(state) {
    return {
        productsArray: state.productsArray,
        ordersArray: state.ordersArray,
        usersArray: state.usersArray,
        clientsArray: state.clientsArray
    }
}

let mapDispatchToProps = {
    getProductsFromApi,
    getClientsFromApi,
    getUsersFromApi,
    getOrdersFromApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);