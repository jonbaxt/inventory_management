import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateProductPartNumber } from '../../../../ducks/reducer';

class PartNumberEdit extends Component {
    constructor() {
        super();
        this.state = {
            partNumberInputBox: '',
        }
        this.handlePartNumberBoxChange = this.handlePartNumberBoxChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }
    handlePartNumberBoxChange(e) { this.setState({ partNumberInputBox: e }); }
    resetInput() { this.setState({ partNumberInputBox: '' }); }
    render() {
        /* 
        partNumberEditView={this.state.partNumberEditView}
        toggleItemEditor={this.props.toggleItemEditor}
        togglePartNumberEditChange={this.togglePartNumberEditChange}
        currentInventoryItem={this.props.currentInventoryItem}
        productName={productName}
        partNumber={partNumber}
        */
        return (
            <div className={this.props.partNumberEditView
                ? css(styles.mainArea) : css(styles.mainArea, styles.editorHide)}>
                <section className={css(styles.modal)} >
                    <h3 className={css(styles.textRedo, styles.marginGapTop)}>Change Part Number of Product</h3>
                    <h5 className={css(styles.textRedo)}>Name:</h5>
                    <h6 className={css(styles.textRedo)}>{this.props.productName}</h6>
                    <h4 className={css(styles.textRedo, styles.marginGapTop)}>Current Part Number:</h4>
                    <h6 className={css(styles.textRedo)}>{this.props.partNumber}</h6>

                    <input type='text'
                        className={css(styles.inputBoxStyled)}
                        placeholder='Part Number'
                        value={this.state.partNumberInputBox}
                        onChange={(e) => { this.handlePartNumberBoxChange(e.target.value) }} />

                    <div className={css(styles.flRow)}>

                        <button className={css(styles.changeButton)}
                            disabled={!this.state.partNumberInputBox}
                            onClick={() => {
                                this.props.updateProductPartNumber(this.props.currentInventoryItem, this.state.partNumberInputBox);
                                this.resetInput();
                                this.props.togglePartNumberEditChange();
                                this.props.toggleItemEditor();
                            }}>Change</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => { this.resetInput(); }}>Reset</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => {
                                this.props.togglePartNumberEditChange(); 
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
    },
    textRedo: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    inputBoxStyled: {
        margin: '0 auto',
        width: '305px',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
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

export default connect(null, { updateProductPartNumber })(PartNumberEdit);