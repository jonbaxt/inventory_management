import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateProductPrice } from '../../../../ducks/reducer';

class PriceEdit extends Component {
    constructor() {
        super();
        this.state = {
            priceInputBox: '',
        }
        this.handlePriceBoxChange = this.handlePriceBoxChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }
    handlePriceBoxChange(e) { this.setState({ priceInputBox: e }); }
    resetInput() { this.setState({ priceInputBox: '' }); }
    render() {
        /* 
        priceEditView={this.state.priceEditView}
        toggleItemEditor={this.props.toggleItemEditor}
        togglePriceEditChange={this.togglePriceEditChange}
        currentInventoryItem={this.props.currentInventoryItem}
        productName={productName}
        itemPrice={itemPrice}
        */
        return (
            <div className={this.props.priceEditView
                ? css(styles.mainArea) : css(styles.mainArea, styles.editorHide)}>
                <section className={css(styles.modal)} >
                    <h3 className={css(styles.textRedo, styles.marginGapTop)}>Change Price of Product</h3>
                    <h5 className={css(styles.textRedo)}>Name:</h5>
                    <h6 className={css(styles.textRedo)}>{this.props.productName}</h6>
                    <h4 className={css(styles.textRedo, styles.marginGapTop)}>Current Price:</h4>
                    <h6 className={css(styles.textRedo)}>${this.props.itemPrice}</h6>

                    <input type='number'
                        className={css(styles.inputBoxStyled)}
                        placeholder='New Price'
                        value={this.state.priceInputBox}
                        onChange={(e) => { this.handlePriceBoxChange(e.target.value) }} />

                    <div className={css(styles.flRow)}>

                        <button className={css(styles.changeButton)}
                            disabled={!this.state.priceInputBox}
                            onClick={() => {
                                this.props.updateProductPrice(this.props.currentInventoryItem, this.state.priceInputBox);
                                this.resetInput();
                                this.props.togglePriceEditChange();
                                this.props.toggleItemEditor();
                            }}>Change</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => { this.resetInput(); }}>Reset</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => {
                                this.props.togglePriceEditChange(); 
                            }} >Close</button>
                    </div>
                </section>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    mainArea: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: '102',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    // Down here is for the editor
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'auto',
        // padding: '10px',
        // paddingTop: '10px',
        // paddingBottom: '10px',
        width: '318px',
        // height: '90vh',
        margin: '0 auto',
        // marginTop: '5px',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    buttonStyle: {
        // marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '15px',
        width: '80px',
        height: '40px',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px black',
        border: '2px solid white',
        boxShadow: '2px 2px 4px black',
        // background: '',
        cursor: 'pointer',
        ':hover': {
            background: 'white',
            color: 'grey',
            border: '2px solid grey',
        },
    },
    changeButton: {
        // marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '10xpx',
        width: '80px',
        height: '40px',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px black',
        border: '2px solid white',
        boxShadow: '2px 2px 4px black',
        background: 'rgb(112,128,144)',
        cursor: 'pointer',
        ':hover': {
            color: 'rgb(112,128,144)',
            border: '2px solid rgb(112,128,144)',
            background: 'white',
        },
        ':disabled': {
            background: 'black',
            color: 'grey',
            border: '2px solid grey',
            cursor: 'not-allowed',
        }
    },
    marginGapTop: {
        marginTop: '15px',
    },
    marginGapBottom: {
        marginBottom: '15px',
    },
    flRow: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    textRedo: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    inputBoxStyled: {
        margin: '0 auto',
        width: '80px',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
        textAlign: 'center',
        textShadow: '1px 1px 2px black',
        ':disabled': {
            background: 'grey',
            '::placeholder': {
                color: 'black',
                textShadow: 'none',
            },
        },
        '::placeholder': {
            color: 'black',
        }
    },
});

export default connect(null, { updateProductPrice })(PriceEdit);