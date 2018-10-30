import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

class NewInventoryItem extends Component {
    constructor() {
        super();
        this.state = {

            // Test Information:

            // productName: 'Kanye West Doll 16 Inches',
            // partNumber: '000FD',
            // labelDescription: 'Love the rapping? The greatness of the West. North West`s dad, loves to drop it like it`s  hot and he will deliver baby. Collect the Tickle Me Kim to complete your set today!',
            // productCount: 50,
            // minimumCount: 1,
            // price: 20.00,
            // imageURL: 'https://i.etsystatic.com/14555790/r/il/72d610/1432506963/il_570xN.1432506963_oke6.jpg',
            // alertWhenLow: false,
            productName: '',
            partNumber: '',
            labelDescription: '',
            productCount: 1,
            minimumCount: 0,
            price: '',
            imageURL: '',
            alertWhenLow: false,
        }
        this.productNameEdit = this.productNameEdit.bind(this);
        this.partNumberEdit = this.partNumberEdit.bind(this);
        this.labelDescriptionEdit = this.labelDescriptionEdit.bind(this);
        this.productCountEdit = this.productCountEdit.bind(this);
        this.minimumCountEdit = this.minimumCountEdit.bind(this);
        this.imageURLEdit = this.imageURLEdit.bind(this);
        this.priceEdit = this.priceEdit.bind(this);
        this.alertWhenLowEdit = this.alertWhenLowEdit.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    productNameEdit(e) { this.setState({ productName: e }); }
    partNumberEdit(e) { this.setState({ partNumber: e }); }
    labelDescriptionEdit(e) { this.setState({ labelDescription: e }); }
    productCountEdit(e) { this.setState({ productCount: e }); }
    minimumCountEdit(e) { this.setState({ minimumCount: e }) };
    imageURLEdit(e) { this.setState({ imageURL: e }); }
    priceEdit(e) { this.setState({ price: e }); }
    alertWhenLowEdit() { this.setState({ alertWhenLow: !this.state.alertWhenLow }); }

    submitNewItem() {
        const newItem = {
            product_name: this.state.productName,
            part_number: this.state.partNumber,
            product_label: this.state.labelDescription,
            product_image: this.state.imageURL,
            current_count: this.state.productCount,
            minimum_stock: this.state.minimumCount,
            price: this.state.price,
            alert_when_low: this.state.alertWhenLow
        }
        this.props.postNewProduct(newItem);
    }

    resetState() {
        this.setState({
            productName: '',
            partNumber: '',
            labelDescription: '',
            productCount: 1,
            minimumCount: 0,
            price: '',
            imageURL: '',
            alertWhenLow: false,
        });
    }

    isDisabled = () => {
        let currentState = '';
        if (this.state.productName !== '' &&
            this.state.partNumber !== '' &&
            this.state.labelDescription !== '' &&
            this.state.price !== '') {
            currentState = true;
        } else {
            currentState = false;
        }
        return currentState;
    }

    render() {
        let alertMessage = this.state.alertWhenLow ? 'Send notification' : 'Do not send notification';


        // console.log(this.props)
        return (
            <div className={this.props.newInventoryItemVisibility ? css(subNavCSS.newInventoryMain) : css(subNavCSS.newInventoryMain, subNavCSS.editorHide)} >
                <div className={css(subNavCSS.newItemModalMain)} >
                    <div className={css(subNavCSS.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            onClick={() => {
                                this.props.toggleNewInventory()
                                // this.resetInputs()
                                // this.props.toggleItemEditor()
                            }} /></div>

                    <h1 className={css(subNavCSS.title)}>New Product</h1>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Name: </h4>
                        <input type='text'
                            placeholder='New Product Name'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.productName}
                            onChange={(e) => this.productNameEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Part Number: </h4>
                        <input type='text'
                            placeholder='New Part Number'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.partNumber}
                            onChange={(e) => this.partNumberEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Description: </h4>
                        <textarea type='text'
                            rows='5'
                            placeholder='New Product Description'
                            className={css(subNavCSS.inputTextArea)}
                            value={this.state.labelDescription}
                            onChange={(e) => this.labelDescriptionEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Current Count of Product: </h4>
                        <input type='number'
                            placeholder='0'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.productCount}
                            onChange={(e) => this.productCountEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Minimum Amount of Products needed on hand: </h4>
                        <input type='number'
                            placeholder='0'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.minimumCount}
                            onChange={(e) => this.minimumCountEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Product Image: </h4>
                        <input
                            type='url'
                            // type='text'
                            placeholder='New Product Image URL'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.imageURL}
                            onChange={(e) => this.imageURLEdit(e.target.value)} />
                    </div>

                    <img className={css(subNavCSS.picResize)} src={this.state.imageURL} alt='' />

                    <div className={css(subNavCSS.flexRow)}>
                        <h5 className={css(subNavCSS.title)}>Price: $</h5>
                        <input type='number'
                            // min="0.01" step="0.01" max="2500"
                            placeholder='0.00'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.price}
                            onChange={(e) => this.priceEdit(e.target.value)} />
                    </div>

                    <h4 className={css(subNavCSS.title)}>Low Product Alert:</h4>

                    <div className={css(subNavCSS.flexRowMiddle)}>
                        <button className={css(subNavCSS.onOffButtons)} disabled={this.state.alertWhenLow} onClick={() => this.alertWhenLowEdit()} >Alert When Low</button>
                        <button className={css(subNavCSS.onOffButtons)} disabled={!this.state.alertWhenLow} onClick={() => this.alertWhenLowEdit()} >Do Not Message Me</button>
                    </div>
                    <h4 className={css(subNavCSS.title)}><span style={{ color: 'rgb(5,0,5)', textShadow: 'none' }}>{alertMessage}</span>  </h4>

                    <div className={css(subNavCSS.flexRowMiddle)}>
                        <button className={css(subNavCSS.buttonSubmit)}
                            disabled={!this.isDisabled()}
                            onClick={() => {
                                this.submitNewItem()
                                console.log('clickedSubmit');
                                this.props.toggleNewInventory();
                            }}>Save New Product</button>
                        <button className={css(subNavCSS.buttonSubmit)}
                            onClick={() => {
                                this.resetState();
                            }}>Reset</button>
                        <button className={css(subNavCSS.buttonSubmit)}
                            onClick={() => {
                                this.resetState();
                                this.props.toggleNewInventory();
                            }}>Cancel</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewInventoryItem;

const subNavCSS = StyleSheet.create({
    newInventoryMain: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        // marginTop: '50px',
        // marginTop: '-1px',
        zIndex: '101',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
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
    title: {
        margin: 0,
        padding: 0,
        textShadow: '2px 2px 4px black',
    },

    newItemModalMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'auto',
        width: '75vw',
        height: '94vh',
        margin: '0 auto',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    buttonSubmit: {
        margin: 0,
        width: '100px',
        marginLeft: '5px',
        marginRight: '5px',
        height: '35px',
        background: 'rgb(255,255,255)',
        boxShadow: '2px 2px 4px rgb(0,0,0)',
        border: 'none',
        marginTop: '10px',
        marginBottom: '15px',
        cursor: 'pointer',
    },
    onOffButtons: {
        width: '150px',
        height: '30px',
        background: 'rgb(255,255,255)',
        boxShadow: '2px 2px 4px rgb(0,0,0)',
        border: 'none',
        marginBottom: '15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        ':disabled': {
            background: 'rgb(75,75,75)',
        },
    },
    closeButton: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '20px',
        marginRight: '20px',
    },
    flexRowMiddle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '20px',
        marginRight: '20px',
    },
    inputBox: {
        width: '50%',
        height: '19px',
        marginLeft: '5px',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
        border: 'none',
        borderShadow: '2px 2px 4px white',
        textShadow: '1px 1px 2px black',
        '::placeholder': {
            color: 'white',
        }
    },
    inputTextArea: {
        width: '50%',
        marginLeft: '5px',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
        border: 'none',
        borderShadow: '2px 2px 4px white',
        textShadow: '1px 1px 2px black',
        '::placeholder': {
            color: 'white',
        }
    },
    picResize: {
        width: '150px',
        margin: '0 auto',
        marginTop: '15px',
        marginBottom: '15px',
    }
});