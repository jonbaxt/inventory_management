import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateClientAddressesById } from '../../../../ducks/reducer';

class UpdateAddresses extends Component {
    constructor() {
        super();
        this.state = {
            compAdd1: '',
            compAdd2: '',
            mailAdd1: '',
            mailAdd2: '',
            compAddCheckbox: 'true',
            mailAddCheckbox: 'true',
        }
        this.handleComp1Change = this.handleComp1Change.bind(this);
        this.handleComp2Change = this.handleComp2Change.bind(this);
        this.handleAdd1Change = this.handleAdd1Change.bind(this);
        this.handleAdd2Change = this.handleAdd2Change.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.changeCompAddCheckbox = this.changeCompAddCheckbox.bind(this);
        this.changeMailAddCheckbox = this.changeMailAddCheckbox.bind(this);
    }
    handleComp1Change(e) { this.setState({ compAdd1: e }); }
    handleComp2Change(e) { this.setState({ compAdd2: e }); }
    handleAdd1Change(e) { this.setState({ mailAdd1: e }); }
    handleAdd2Change(e) { this.setState({ mailAdd2: e }); }
    resetAll() {
        this.setState({
            compAdd1: '', compAdd2: '', mailAdd1: '', mailAdd2: '',
            compAddCheckbox: 'true', mailAddCheckbox: 'true' 
        });
        this.handleCompAddCheckboxChanging();
        this.handleMailAddCheckboxChanging();
    }
    changeCompAddCheckbox() { this.setState({ compAddCheckbox: !this.state.compAddCheckbox }); }
    // changeCompAddCheckbox(e) { this.setState({ compAddCheckbox: e }); }
    changeMailAddCheckbox() { this.setState({ mailAddCheckbox: !this.state.mailAddCheckbox }); }
    // changeMailAddCheckbox(e) { this.setState({ mailAddCheckbox: e }); }
    handleCompAddCheckboxChanging = () => {
        if (this.state.compAddCheckbox) {
            this.setState({ compAdd1: this.props.currentClientViewed.company_address_line_1, compAdd2: this.props.currentClientViewed.company_address_line_2 });
        } else {
            this.setState({ compAdd1: '', compAdd2: '' });
        }
    }
    handleMailAddCheckboxChanging = () => {
        if (this.state.mailAddCheckbox) {
            this.setState({ mailAdd1: this.props.currentClientViewed.mailing_address_line_1, mailAdd2: this.props.currentClientViewed.mailing_address_line_2 });
        } else {
            this.setState({ mailAdd1: '', mailAdd2: '' });
        }
    }
    isUpdateDisabled = () => {
        let disableIt = '';
        if (this.state.compAdd1 === '' || this.state.compAdd2 === '' || this.state.mailAdd1 === '' || this.state.mailAdd2 === '') {
            disableIt = true;
        } else {
            disableIt = false;
        }
        return disableIt;
    }


    render() {
        let newAddMessComp = this.state.compAdd1 !== '' || this.state.compAdd2 !== '' ? <h5 className={css(addStyle.textForm, addStyle.underline)}>New Address:</h5> : ''
        let newAddMessMail = this.state.mailAdd1 !== '' || this.state.mailAdd2 !== '' ? <h5 className={css(addStyle.textForm, addStyle.underline)}>New Address:</h5> : ''
        return (
            <div className={this.props.updateAddressVisible ? css(addStyle.outerSurface) : css(addStyle.outerSurface, addStyle.hide)}>
                <div className={css(addStyle.modalSheet)}>
                    <h2 className={css(addStyle.textForm, addStyle.underline)}>Update Addresses</h2>
                    <h3 className={css(addStyle.textForm)}>{this.props.currentClientViewed.first_name + ' ' + this.props.currentClientViewed.last_name}</h3>
                    <h3 className={css(addStyle.textForm)}>{this.props.currentClientViewed.company}</h3>
                    <div className={css(addStyle.flexRow, addStyle.maxWidth)}>
                        <div className={css(addStyle.flexCol, addStyle.halfWidth)}>
                            <h4 className={css(addStyle.textForm, addStyle.underline)}>Current Company Address</h4>

                            <h6 className={css(addStyle.textForm)}>{this.props.currentClientViewed.company_address_line_1}</h6>
                            <h6 className={css(addStyle.textForm)}>{this.props.currentClientViewed.company_address_line_2}</h6>
                            <br />
                            <div className={css(addStyle.flexRow)}>
                                <input type='checkbox'
                                    className={css(addStyle.checkBoxRedesign)}
                                    value={this.state.compAddCheckbox}
                                    onChange={(e) => {
                                        this.changeCompAddCheckbox();
                                        // this.changeCompAddCheckbox(e.target.value);
                                        this.handleCompAddCheckboxChanging();
                                        console.log(`Company Address Checkbox: ${e} and ${e.target} and ${e.target.value}`);
                                    }} /><h5 className={css(addStyle.textForm)}>Keep the current address</h5>
                            </div>
                            <br />
                            <h4 className={css(addStyle.textForm, addStyle.underline)}>New Company Address</h4>

                            <input type='text' className={css(addStyle.inputBoxStyled)}
                                placeholder='Street Name, Numbers Etc.'
                                disabled={!this.state.compAddCheckbox}
                                value={this.state.compAdd1}
                                onChange={(e) => this.handleComp1Change(e.target.value)} />
                            <input type='text' className={css(addStyle.inputBoxStyled)}
                                placeholder='City, State Postal Code'
                                disabled={!this.state.compAddCheckbox}
                                value={this.state.compAdd2}
                                onChange={(e) => this.handleComp2Change(e.target.value)} />
                            {newAddMessComp}
                            <h6 className={css(addStyle.textForm)}>{this.state.compAdd1}</h6>
                            <h6 className={css(addStyle.textForm)}>{this.state.compAdd2}</h6>

                        </div>
                        <div className={css(addStyle.flexCol, addStyle.halfWidth)}>
                            <h4 className={css(addStyle.textForm, addStyle.underline)}>Current Mailing Address</h4>
                            <h6 className={css(addStyle.textForm)}>{this.props.currentClientViewed.mailing_address_line_1}</h6>
                            <h6 className={css(addStyle.textForm)}>{this.props.currentClientViewed.mailing_address_line_2}</h6>
                            <br />
                            <div className={css(addStyle.flexRow)}>
                                <input type='checkbox'
                                    className={css(addStyle.checkBoxRedesign)}
                                    value={this.state.mailAddCheckbox}
                                    onChange={(e) => {
                                        this.changeMailAddCheckbox();
                                        // this.changeMailAddCheckbox(e.target.value);
                                        this.handleMailAddCheckboxChanging();
                                        console.log(`Company Address Checkbox: ${e.target.value}`);
                                    }} /><h5 className={css(addStyle.textForm)}>Keep the current address</h5>
                            </div>
                            <br />

                            <h4 className={css(addStyle.textForm, addStyle.underline)}>New Mailing Address</h4>

                            <input type='text' className={css(addStyle.inputBoxStyled)}
                                placeholder='Street Name, PO Box, Etc.'
                                disabled={!this.state.mailAddCheckbox}
                                value={this.state.mailAdd1}
                                onChange={(e) => this.handleAdd1Change(e.target.value)} />

                            <input type='text' className={css(addStyle.inputBoxStyled)}
                                placeholder='City, State Postal Code'
                                disabled={!this.state.mailAddCheckbox}
                                value={this.state.mailAdd2}
                                onChange={(e) => this.handleAdd2Change(e.target.value)} />

                            {newAddMessMail}
                            <h6 className={css(addStyle.textForm)}>{this.state.mailAdd1}</h6>
                            <h6 className={css(addStyle.textForm)}>{this.state.mailAdd2}</h6>

                        </div>
                    </div>
                    <div className={css(addStyle.flexRow)}>
                        <button className={css(addStyle.updateButton)}
                            disabled={this.isUpdateDisabled()}
                            onClick={() => {
                                const newAddresses = {
                                    company_address_line_1: this.state.compAdd1,
                                    company_address_line_2: this.state.compAdd2,
                                    mailing_address_line_1: this.state.mailAdd1,
                                    mailing_address_line_2: this.state.mailAdd2,
                                }
                                this.props.updateClientAddressesById(this.props.currentClientViewed.client_id, newAddresses);
                                this.props.toggleUpdateAddressVisible();
                                this.props.toggleEditVisible();
                                // console.log('Update Clicked')
                            }} >Update</button>

                        <button className={css(addStyle.cancelButton)}
                            onClick={() => {
                                this.resetAll();
                            }} >Reset</button>

                        <button className={css(addStyle.cancelButton)}
                            onClick={() => {
                                this.resetAll();
                                this.props.toggleUpdateAddressVisible();
                            }}>Close</button>

                    </div>
                </div>
            </div>
        )
    }
}

const addStyle = StyleSheet.create({
    outerSurface: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        background: 'rgba(47,79,79,0.5)',
        visibility: 'visible',
        zIndex: '103',
    },
    hide: {
        visibility: 'hidden',
    },
    modalSheet: {
        width: '95%',
        height: '90vh',
        paddingTop: '10px',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textForm: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    underline: {
        textDecorationLine: 'underline',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        border: '2px dotted blue',
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px dotted green',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    maxWidth: {
        width: '100%',
        height: '100%',
    },
    halfWidth: {
        width: '49%',
    },
    inputBoxStyled: {
        width: '315px',
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
    checkBoxRedesign: {
        width: '12px',
        height: '12px',
    },
    updateButton: {
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
    cancelButton: {
        // marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '10px',
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
});

export default connect(null, { updateClientAddressesById })(UpdateAddresses);