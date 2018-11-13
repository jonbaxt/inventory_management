import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateProductCurrentCount } from '../../../../ducks/reducer';

class CurrCountEdit extends Component {
    constructor() {
        super();
        this.state = {
            currCountInputBox: '',
        }
        this.handleCurrCountBoxChange = this.handleCurrCountBoxChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }
    handleCurrCountBoxChange(e) { this.setState({ currCountInputBox: e }); }
    resetInput() { this.setState({ currCountInputBox: '' }); }
    render() {
        /* 
        currCountEditView={this.state.currCountEditView}
        toggleItemEditor={this.props.toggleItemEditor}
        toggleCurrCountEditChange={this.toggleCurrCountEditChange}
        currentInventoryItem={this.props.currentInventoryItem}
        productName={productName}
        productCount={productCount}
        */
        return (
            <div className={this.props.currCountEditView
                ? css(styles.mainArea) : css(styles.mainArea, styles.editorHide)}>
                <section className={css(styles.modal)} >
                    <h3 className={css(styles.textRedo, styles.marginGapTop)}>Change Current Item Count of Product</h3>
                    <h5 className={css(styles.textRedo)}>Name:</h5>
                    <h6 className={css(styles.textRedo)}>{this.props.productName}</h6>
                    <div className={css(styles.flRow)} >
                        <h4 className={css(styles.textRedo, styles.marginGapTop, styles.underline)}>Current Item Count: </h4><br />
                        <h4 className={css(styles.textRedo, styles.marginGapTop)}>{this.props.productCount}</h4>
                    </div>

                    <input type='number'
                        className={css(styles.inputBoxStyled)}
                        placeholder='New Item Count'
                        value={this.state.currCountInputBox}
                        onChange={(e) => { this.handleCurrCountBoxChange(e.target.value) }} />

                    <div className={css(styles.flRow)}>

                        <button className={css(styles.changeButton)}
                            disabled={!this.state.currCountInputBox}
                            onClick={() => {
                                this.props.updateProductCurrentCount(this.props.currentInventoryItem, this.state.currCountInputBox);
                                this.resetInput();
                                this.props.toggleCurrCountEditChange();
                                this.props.toggleItemEditor();
                            }}>Change</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => { this.resetInput(); }}>Reset</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => {
                                this.props.toggleCurrCountEditChange();
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
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textRedo: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    inputBoxStyled: {
        margin: '0 auto',
        // width: '305px',
        width: '125px',
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
    underline: {
        textDecorationLine: 'underline',
    },
    // noUnderline: {
    //     textDecorationLine: 'none',
    // },
});

export default connect(null, { updateProductCurrentCount })(CurrCountEdit);