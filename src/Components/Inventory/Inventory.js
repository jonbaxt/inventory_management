import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
// import axios from 'axios';
import { connect } from 'react-redux';

import InventoryItem from './ChildComponents/InventoryItem';
// import ItemEditor from './ChildComponents/ItemEditor';
import ItemEditorNew from './ChildComponents/ItemEditorNew';
import NewInventoryItem from './ChildComponents/NewInventoryItem';
import MoreInfo from './ChildComponents/EditorModals/MoreInfo';
import { getProductsFromApi, getClientsFromApi, getUsersFromApi, getOrdersFromApi, postNewProductToDB } from '../../ducks/reducer';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            // currentInventory: [],
            itemEditorVisible: false, // Switch back to false
            newItemVisible: false,
            moreInfoVisible: false,
            currentProductNumber: 1,
        }
        this.toggleItemEditor = this.toggleItemEditor.bind(this);
        this.toggleNewInventoryModal = this.toggleNewInventoryModal.bind(this);
        this.toggleMoreInfoModal = this.toggleMoreInfoModal.bind(this);
        this.retrieveCurrentProductNumber = this.retrieveCurrentProductNumber.bind(this);
        this.retrieveCurrentProductNumberForMore = this.retrieveCurrentProductNumberForMore.bind(this);
        this.postNewProduct = this.postNewProduct.bind(this);
    }
    componentDidMount() {
        // First retrieval essential for home page. rest of the other Axios calls are to help the website to run faster after loaded.
        // if (this.props.productsArray.length === 1) {
        if (typeof this.props.productsArray !== 'undefined') {
            if (this.props.productsArray.length === 0) {
                this.props.getProductsFromApi();
                this.props.getOrdersFromApi();
                this.props.getUsersFromApi();
                this.props.getClientsFromApi();
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (typeof this.props.productsArray !== 'undefined') {
            if (this.props.productsArray.length !== prevProps.productsArray.length) {
                this.props.getProductsFromApi();
                this.props.getOrdersFromApi();
                this.props.getUsersFromApi();
                this.props.getClientsFromApi();
            }
        }
    }

    toggleItemEditor() {
        this.setState({ itemEditorVisible: !this.state.itemEditorVisible });
    }
    toggleNewInventoryModal() {
        this.setState({ newItemVisible: !this.state.newItemVisible });
    }
    toggleMoreInfoModal() {
        this.setState({ moreInfoVisible: !this.state.moreInfoVisible });
    }

    retrieveCurrentProductNumber(prodNum) {
        // console.log('Current Product Number: ', prodNum);
        this.setState({ currentProductNumber: prodNum });
        this.toggleItemEditor();
        // console.log(`Item Editor Visability: ${this.state.itemEditorVisible}`)
    }

    retrieveCurrentProductNumberForMore(prodNum) {
        console.log('Current Product Number: ', prodNum);
        this.setState({ currentProductNumber: prodNum });
        this.toggleMoreInfoModal();
    }

    postNewProduct(productObject) {
        this.props.postNewProductToDB(productObject);
        
        // axios.post('/api/newproduct/insert', productObject).then(newProductTable => {
        //     console.log(newProductTable.data);
        //     this.setState({ currentInventory: newProductTable.data });
        // }).catch((err) => console.log('Didn`t work:', err));
    }

    render() {
        // console.log('is productsArray undefined:', typeof this.props.productsArray === 'undefined')

        let inventoryList = this.props.productsArray.length !== 0 ? this.props.productsArray.map((element, index) => {
            return (<InventoryItem key={element.inventory_id}
                currentInfo={element}
                giveBackFunction={this.retrieveCurrentProductNumber} 
                giveBackFunctionForMoreButton={this.retrieveCurrentProductNumberForMore} />)
        }) : <h3 className={css(invCSS.h2Reformat)} >No Products Found. Please Refresh Browser.</h3>

        // let itemEdits = 'Page loading';
        // let itemEdits = this.props.productsArray.length !== 0 ?
        //     <ItemEditor inventory={this.props.productsArray}
        //         currentInventoryItem={this.state.currentProductNumber}
        //         editorVisibility={this.state.itemEditorVisible}
        //         toggleItemEditor={this.toggleItemEditor} />
        //     : 'Loading';

        let itemEditNew = this.props.productsArray.length !== 0 ?
            <ItemEditorNew inventory={this.props.productsArray}
                currentInventoryItem={this.state.currentProductNumber}
                editorVisibility={this.state.itemEditorVisible}
                toggleItemEditor={this.toggleItemEditor}
                retrieveCurrentProductNumber={this.retrieveCurrentProductNumber} />
            : 'Loading';


        // let newInvItem = 'Page loading';
        let newInvItem = this.props.productsArray.length !== 0 ?
            <NewInventoryItem
                newInventoryItemVisibility={this.state.newItemVisible}
                toggleNewInventory={this.toggleNewInventoryModal}
                postNewProduct={this.postNewProduct}
                retrieveCurrentProductNumber={this.retrieveCurrentProductNumber} />
            : 'Loading';

        let moreInfo = this.props.productsArray.length !== 0 ? 
            <MoreInfo 
                moreInfoVisible={this.state.moreInfoVisible}
                toggleMoreInfoModal={this.toggleMoreInfoModal}
                currentInventoryItem={this.state.currentProductNumber}
                inventory={this.props.productsArray} /> : 'Loading';

        return (
            <div>
                <div className={css(invCSS.subNavBar)}>
                    <h4 className={css(invCSS.h2Reformat, invCSS.hand)}
                        onClick={() => this.toggleNewInventoryModal()}>New Product</h4>
                </div>
                {/* {itemEdits} */}
                {itemEditNew}
                {newInvItem}
                {moreInfo}
                <h1 className={css(invCSS.titleH)} >Current Inventory</h1>
                <div className={css(invCSS.main)} >
                    {/* Need to connect the edit with put method still */}
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
    },
    subNavBar: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
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
        textShadow: '2px 2px 4px black',
    },
    titleH: {
        margin: 0,
        paddingTop: '70px',
        color: 'white',
        textShadow: '2px 2px 4px black',
    },
});

function mapStateToProps(state) {
    if (typeof state.productsArray !== 'undefined') {
        // if (state.productsArray.length > 0) {
        return {
            productsArray: state.productsArray,
            ordersArray: state.ordersArray,
            usersArray: state.usersArray,
            clientsArray: state.clientsArray
        }
        // }
    }
    else {
        return {
            productsArray: [],
            ordersArray: [],
            usersArray: [],
            clientsArray: []
        }
    }
}
let mapDispatchToProps = {
    getProductsFromApi,
    getClientsFromApi,
    getUsersFromApi,
    getOrdersFromApi,
    postNewProductToDB
}
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);