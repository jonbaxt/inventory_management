import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateProductAlertWhenLow } from '../../../../ducks/reducer';

class AlertNotifyEdit extends Component {
    constructor() {
        super();
        this.state = {
            alertInput: '',
        }
        this.handleAlertChange = this.handleAlertChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    componentDidMount() {
        this.setState({ alertInput: this.props.alertNotification });
    }

    handleAlertChange() { this.setState({ alertInput: !this.state.alertInput }); }
    resetInput() { this.setState({ minCountInputBox: '' }); }
    render() {
        let alertMessage = this.state.alertInput ? 'Send notification' : 'Do not send notification';

    
        /* 
        alertEditView={this.state.alertEditView}
        toggleItemEditor={this.props.toggleItemEditor}
        toggleAlertEditChange={this.toggleAlertEditChange}
        currentInventoryItem={this.props.currentInventoryItem}
        productName={productName}
        alertNotification={alertNotification}
        */
        return (
            <div className={this.props.alertEditView
                ? css(styles.mainArea) : css(styles.mainArea, styles.editorHide)}>
                <section className={css(styles.modal)} >
                    <h3 className={css(styles.textRedo, styles.marginGapTop)}>Change Alert Notification of Product</h3>
                    <h5 className={css(styles.textRedo)}>Name:</h5>
                    <h6 className={css(styles.textRedo)}>{this.props.productName}</h6>
                    {/* <div className={css(styles.flRow)} > */}
                        {/* <h4 className={css(styles.textRedo, styles.marginGapTop)}> */}
                        {/* {this.props.minimumProductRequired} */}
                        {/* </h4> */}
                    {/* </div> */}
                    <h4 className={css(styles.title)}>Low Product Alert:</h4>

                    <div className={css(styles.flexRowMiddle)}>
                        <button className={css(styles.onOffButtons)} disabled={this.state.alertInput} onClick={() => this.handleAlertChange()} >Alert When Low</button>
                        <button className={css(styles.onOffButtons)} disabled={!this.state.alertInput} onClick={() => this.handleAlertChange()} >Do Not Message Me</button>
                    </div>
                    <h4 className={css(styles.title)}><span style={{ color: 'rgb(5,0,5)', textShadow: 'none' }}>{alertMessage}</span>  </h4>


                    {/* <input type='number'
                        className={css(styles.inputBoxStyled)}
                        placeholder='Minimum Count'
                        value={this.state.minCountInputBox}
                        onChange={(e) => { this.handleMinCountBoxChange(e.target.value) }} /> */}

                    <div className={css(styles.flRow)}>
                        <button className={css(styles.changeButton)}
                            disabled={!this.state.alertInput !== this.props.alertNotification}
                            onClick={() => {
                                this.props.updateProductAlertWhenLow(this.props.currentInventoryItem, this.state.alertInput);
                                // this.resetInput();
                                this.props.toggleAlertEditChange();
                                this.props.toggleItemEditor();
                            }}>Change</button>
                        {/* <button className={css(styles.buttonStyle)} */}
                            {/* onClick={() => { */}
                                {/* // this.resetInput(); */}
                            {/* }}>Reset</button> */}
                        <button className={css(styles.buttonStyle)}
                            onClick={() => {
                                this.props.toggleAlertEditChange();
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
    title: {
        margin: 0,
        padding: 0,
        textShadow: '2px 2px 4px black',
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
    flexRowMiddle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '20px',
        marginRight: '20px',
    },
});

export default connect(null, { updateProductAlertWhenLow })(AlertNotifyEdit);