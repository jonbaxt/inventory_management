import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import NameEdit from './EditorModals/NameEdit';
import PartNumberEdit from './EditorModals/PartNumberEdit';

import CurrCountEdit from './EditorModals/CurrCountEdit';
import MinCountEdit from './EditorModals/MinCountEdit';
import PriceEdit from './EditorModals/PriceEdit';

class ItemEditorNew extends Component {
    constructor() {
        super();
        this.state = {
            nameEditView: false,
            partNumberEditView: false,

            currCountEditView: false,
            minCountEditView: false,
            priceEditView: false,
        }
        this.toggleNameEditChange = this.toggleNameEditChange.bind(this);
        this.togglePartNumberEditChange = this.togglePartNumberEditChange.bind(this);

        this.toggleCurrCountEditChange = this.toggleCurrCountEditChange.bind(this);
        this.toggleMinCountEditChange = this.toggleMinCountEditChange.bind(this);
        this.togglePriceEditChange = this.togglePriceEditChange.bind(this);
    }
    toggleNameEditChange() { this.setState({ nameEditView: !this.state.nameEditView }); }
    togglePartNumberEditChange() { this.setState({ partNumberEditView: !this.state.partNumberEditView }); }

    toggleCurrCountEditChange() { this.setState({ currCountEditView: !this.state.currCountEditView }); }
    toggleMinCountEditChange() { this.setState({ minCountEditView: !this.state.minCountEditView }); }
    togglePriceEditChange() { this.setState({ priceEditView: !this.state.priceEditView }); }

    render() {
        let productDetails = this.props.inventory.filter((product) => product.inventory_id === this.props.currentInventoryItem);
        let currentProduct = '';
        let productName = '';
        let partNumber = '';
        let itemPrice = '';
        let label = '';
        let productCount = '';
        let minimumProductRequired = '';
        let image = '';
        if (this.props.inventory.length !== 0) {
            currentProduct = productDetails[0];
            productName = currentProduct.product_name;
            partNumber = currentProduct.part_number;
            itemPrice = currentProduct.price;
            label = currentProduct.product_label;
            productCount = currentProduct.current_count;
            minimumProductRequired = currentProduct.minimum_stock;
            image = currentProduct.product_image;
            // this.handleNameEdit(productName);
        }
        return (
            <div className={this.props.editorVisibility ? css(editStyles.mainArea) : css(editStyles.mainArea, editStyles.editorHide)}>

                <section className={css(editStyles.editorMain)}>
                    <div className={css(editStyles.closeDiv)}>
                        <FontAwesomeIcon className={css(editStyles.closeButton)}
                            icon={faTimesCircle}
                            onClick={() => {
                                // this.resetInputs()
                                this.props.toggleItemEditor()
                            }} /></div>
                    <h3 className={css(editStyles.textRedo)}>Product Editor Options</h3>
                    <h4 className={css(editStyles.textRedo)}>Product #{this.props.currentInventoryItem}</h4>
                    <h5 className={css(editStyles.textRedo)}>{productName}</h5>

                    <div className={css(editStyles.optionsArea)}>

                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                this.toggleNameEditChange();
                                // console.log('clicked')
                            }}>Change Product Name</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                this.togglePartNumberEditChange();
                                // console.log('clicked')
                            }}>Change Part Number</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                console.log('clicked')
                            }}>Change Product Label</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                console.log('clicked')
                            }}>Change Image</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                this.toggleCurrCountEditChange();
                                // console.log('clicked')
                            }}>Change Current Product Count</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                this.toggleMinCountEditChange();
                                // console.log('clicked')
                            }}>Change Minimum Stock Required</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                this.togglePriceEditChange();
                                // console.log('clicked')
                            }}>Change Price</span>
                        <span className={css(editStyles.optionButton)}
                            onClick={() => {
                                console.log('clicked')
                            }}>Change Alert Notification</span>
                        <span className={css(editStyles.deleteButton)}
                            onClick={() => {
                                console.log('clicked')
                            }}>Delete Product</span>
                    </div>
                </section>
                <NameEdit
                    nameEditView={this.state.nameEditView}
                    toggleItemEditor={this.props.toggleItemEditor}
                    toggleNameEditChange={this.toggleNameEditChange}
                    currentInventoryItem={this.props.currentInventoryItem}
                    productName={productName}
                />
                <PartNumberEdit 
                    partNumberEditView={this.state.partNumberEditView}
                    toggleItemEditor={this.props.toggleItemEditor}
                    togglePartNumberEditChange={this.togglePartNumberEditChange}
                    currentInventoryItem={this.props.currentInventoryItem}
                    productName={productName}
                    partNumber={partNumber}
                />

                <CurrCountEdit 
                    currCountEditView={this.state.currCountEditView}
                    toggleItemEditor={this.props.toggleItemEditor}
                    toggleCurrCountEditChange={this.toggleCurrCountEditChange}
                    currentInventoryItem={this.props.currentInventoryItem}
                    productName={productName}
                    productCount={productCount}
                />
                <MinCountEdit 
                    minCountEditView={this.state.minCountEditView}
                    toggleItemEditor={this.props.toggleItemEditor}
                    toggleMinCountEditChange={this.toggleMinCountEditChange}
                    productName={productName}
                    minimumProductRequired={minimumProductRequired}
                />
                <PriceEdit 
                    priceEditView={this.state.priceEditView}
                    toggleItemEditor={this.props.toggleItemEditor}
                    togglePriceEditChange={this.togglePriceEditChange}
                    currentInventoryItem={this.props.currentInventoryItem}
                    productName={productName}
                    itemPrice={itemPrice}
                />

            </div>
        )
    }
}

const editStyles = StyleSheet.create({
    mainArea: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // marginTop: '50px',
        // marginTop: '-26px',
        zIndex: '101',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    // Down here is for the editor
    editorMain: {
        display: 'flex',
        // flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'auto',
        width: '318px',
        height: '90vh',
        margin: '0 auto',
        // marginTop: '5px',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    textRedo: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    closeDiv: {
        marginTop: '5px',
        marginRight: '5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    closeButton: {
        color: 'white',
        textAlign: 'right',
        cursor: 'pointer',
        fontSize: '20px',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgba(47,79,79, 0.8)',
        },
    },
    optionsArea: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    optionButton: {
        width: '250px',
        height: '45px',
        margin: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',

        transition: '0.2s all ease',

        ':hover': {
            transition: '0.2s all ease',
            background: 'white',
            // background: 'rgb(47,79,79)',
            color: 'rgb(47, 79, 79)',
            // color: 'white',
            border: '2px solid rgb(47, 79, 79)',
            // color: 'rgb(47,79,79)',
        },
    },
    deleteButton: {
        width: '250px',
        height: '30px',
        margin: '4px',
        alignItems: 'center',
        // background: 'rgb(47,79,79)',
        background: 'red',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',

        transition: '0.2s all ease',

        ':hover': {
            transition: '0.2s all ease',
            color: 'red',
            // background: 'white',
            background: 'rgb(128,0,0)',
            border: '2px solid red',
        },
    }

});

export default ItemEditorNew;