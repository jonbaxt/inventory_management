import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateProductMinimumStock } from '../../../../ducks/reducer';

class MinCountEdit extends Component {
    constructor() {
        super();
        this.state = {
            minCountInputBox: '',
        }
        this.handleMinCountBoxChange = this.handleMinCountBoxChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }
    handleMinCountBoxChange(e) { this.setState({ minCountInputBox: e }); }
    resetInput() { this.setState({ minCountInputBox: '' }); }
    render() {
        // Minimum Count Still not working

        /* 
        minCountEditView={this.state.minCountEditView}
        toggleItemEditor={this.props.toggleItemEditor}
        toggleMinCountEditChange={this.toggleMinCountEditChange}
        productName={productName}
        minimumProductRequired={minimumProductRequired}
        */
        return (
            <div className={ this.props.minCountEditView
                ? css(styles.mainArea) : css(styles.mainArea, styles.editorHide)}>
                <section className={css(styles.modal)} >
                    <h3 className={css(styles.textRedo, styles.marginGapTop)}>Change Minimum Item Count Needed on Hand of Product</h3>
                    <h5 className={css(styles.textRedo)}>Name:</h5>
                    <h6 className={css(styles.textRedo)}>{this.props.productName}</h6>
                    <div className={css(styles.flRow)} >
                        <h4 className={css(styles.textRedo, styles.marginGapTop, styles.underline)}>Minimum Item Count: </h4><br />
                        <h4 className={css(styles.textRedo, styles.marginGapTop)}>{this.props.minimumProductRequired}</h4>
                    </div>

                    <input type='number'
                        className={css(styles.inputBoxStyled)}
                        placeholder='Minimum Count'
                        value={this.state.minCountInputBox}
                        onChange={(e) => { this.handleMinCountBoxChange(e.target.value) }} />

                    <div className={css(styles.flRow)}>
                        <button className={css(styles.changeButton)}
                            disabled={!this.state.minCountInputBox}
                            onClick={() => {
                                this.props.updateProductMinimumStock(this.props.currentInventoryItem, this.state.minCountInputBox);
                                this.resetInput();
                                this.props.toggleMinCountEditChange();
                                this.props.toggleItemEditor();
                            }}>Change</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => { this.resetInput(); }}>Reset</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => {
                                this.props.toggleMinCountEditChange();
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
        width: '318px',
        margin: '0 auto',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    buttonStyle: {
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
        cursor: 'pointer',
        ':hover': {
            background: 'white',
            color: 'grey',
            border: '2px solid grey',
        },
    },
    changeButton: {
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
});

export default connect(null, { updateProductMinimumStock })(MinCountEdit);