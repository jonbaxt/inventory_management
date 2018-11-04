import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export default class NewClient extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            companyName: '',
            companyAddLine1: '',
            companyAddLine2: '',
            mailingAddLine1: '',
            mailingAddLine2: '',
            checkBoxState: false,
            inputBoxDisabled: false,
        }
        this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
        this.handleLastNameInput = this.handleLastNameInput.bind(this);
        this.handlePhoneNumberInput = this.handlePhoneNumberInput.bind(this);
        this.handleEmailAddressInput = this.handleEmailAddressInput.bind(this);
        this.handleCompanyNameInput = this.handleCompanyNameInput.bind(this);
        this.handleCompanyAddLine1 = this.handleCompanyAddLine1.bind(this);
        this.handleCompanyAddLine2 = this.handleCompanyAddLine2.bind(this);
        this.handleMailingAddLine1 = this.handleMailingAddLine1.bind(this);
        this.handleMailingAddLine2 = this.handleMailingAddLine2.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.resetAllInputBoxes = this.resetAllInputBoxes.bind(this);
    }
    handleFirstNameInput(e) { this.setState({ firstName: e }); }
    handleLastNameInput(e) { this.setState({ lastName: e }); }
    handlePhoneNumberInput(e) { this.setState({ phoneNumber: e }); }
    handleEmailAddressInput(e) { this.setState({ emailAddress: e }); }
    handleCompanyNameInput(e) { this.setState({ companyName: e }); }
    handleCompanyAddLine1(e) { this.setState({ companyAddLine1: e }); }
    handleCompanyAddLine2(e) { this.setState({ companyAddLine2: e }); }
    handleMailingAddLine1(e) { this.setState({ mailingAddLine1: e }); }
    handleMailingAddLine2(e) { this.setState({ mailingAddLine2: e }); }
    handleCheckBoxChange() { 
        this.setState({ checkBoxState: !this.state.checkBoxState });
    if(!this.state.checkBoxState){
        this.setState({ mailingAddLine1: this.state.companyAddLine1, mailingAddLine2: this.state.companyAddLine2, inputBoxDisabled: true });
    }else {
        this.setState({ mailingAddLine1: '', mailingAddLine2: '', inputBoxDisabled: false });
    } 
}
    resetAllInputBoxes() {
        this.setState({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            emailAddress: '',
            companyName: '',
            companyAddLine1: '',
            companyAddLine2: '',
            mailingAddLine1: '',
            mailingAddLine2: ''
        });
    }
    // client_id: 1,
    // first_name: "Rod",
    // last_name: "Ferdinand",
    // phone_number: "801-899-2456",
    // email: "rodboy@generalgoods.com",
    // company: "General Goods",
    // company_address_line_1: "123 South 23 East",
    // company_address_line_2: "Houston TX 77001",
    // mailing_address_line_1: "123 South 23 East",
    // mailing_address_line_2: "Houston TX 77001"
    render() {

        return (
            <div className={this.props.newClientVisible ? css(newCliCSS.outerArea) : css(newCliCSS.outerArea, newCliCSS.hide)}>
                <div className={css(newCliCSS.mainModal)} >
                    <div className={css(newCliCSS.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            onClick={() => {
                                this.resetAllInputBoxes();
                                this.props.toggleNewClient();
                            }} /></div>

                    <h2 className={css(newCliCSS.hFormat)}>Add New Client</h2>
                    <div className={css(newCliCSS.inputArea)}>
                        <h5 className={css(newCliCSS.smallFontRes)}>First Name:</h5>
                        <input className={css(newCliCSS.inputBoxStyled)}
                            type='text'
                            placeholder='Joe'
                            value={this.state.firstName}
                            onChange={(e) => this.handleFirstNameInput(e.target.value)} />
                        <h5 className={css(newCliCSS.smallFontRes)}>Last Name:</h5>
                        <input className={css(newCliCSS.inputBoxStyled)}
                            type='text'
                            placeholder='Client'
                            value={this.state.lastName}
                            onChange={(e) => this.handleLastNameInput(e.target.value)} />
                    </div>
                    <br />
                    <div className={css(newCliCSS.inputArea)}>
                        <h5 className={css(newCliCSS.smallFontRes)}>Phone:</h5>
                        <input className={css(newCliCSS.inputBoxStyled)}
                            type='text'
                            placeholder='000 000 0000'
                            value={this.state.phoneNumber}
                            onChange={(e) => this.handlePhoneNumberInput(e.target.value)} />
                        <h5 className={css(newCliCSS.smallFontRes)}>Email:</h5>
                        <input className={css(newCliCSS.inputBoxStyled)}
                            type='text'
                            placeholder='porky@email.com'
                            value={this.state.emailAddress}
                            onChange={(e) => this.handleEmailAddressInput(e.target.value)} />
                    </div>
                    <br />
                    <div className={css(newCliCSS.inputArea)}>
                        <h5 className={css(newCliCSS.smallFontRes)}>Company:</h5>
                        <input className={css(newCliCSS.inputBoxStyled)}
                            type='text'
                            placeholder='WalCompy'
                            value={this.state.companyName}
                            onChange={(e) => this.handleCompanyNameInput(e.target.value)} />
                    </div>
                    <div className={css(newCliCSS.inputArea, newCliCSS.readjustHeight)}>
                        <div className={css(newCliCSS.inputAreaColumned)}>
                            <h5 className={css(newCliCSS.smallFontRes)}>Company Address:</h5>
                            <input className={css(newCliCSS.inputBoxStyled)}
                                type='text'
                                placeholder='123 S 34 E'
                                value={this.state.companyAddLine1}
                                onChange={(e) => this.handleCompanyAddLine1(e.target.value)} />
                            <input className={css(newCliCSS.inputBoxStyled, newCliCSS.inputBoxStyledSpacing)}
                                type='text'
                                placeholder='Some City, TX  00000'
                                value={this.state.companyAddLine2}
                                onChange={(e) => this.handleCompanyAddLine2(e.target.value)} />

                        </div>
                        <div className={css(newCliCSS.inputAreaColumned)}>
                            <h5 className={css(newCliCSS.smallFontRes)}>Mailing Address:</h5>
                            <input className={css(newCliCSS.inputBoxStyled)}
                                type='text'
                                placeholder='45 N 50 W'
                                disabled={this.state.inputBoxDisabled}
                                value={this.state.mailingAddLine1}
                                onChange={(e) => this.handleMailingAddLine1(e.target.value)} />
                            <input className={css(newCliCSS.inputBoxStyled, newCliCSS.inputBoxStyledSpacing)}
                                type='text'
                                placeholder='Some City, TX 00000'
                                disabled={this.state.inputBoxDisabled}
                                value={this.state.mailingAddLine2}
                                onChange={(e) => this.handleMailingAddLine2(e.target.value)} />

                        </div>
                    </div>
                    <span className={css(newCliCSS.flexR)}>
                        <input type='checkbox'
                        className={css(newCliCSS.checkBoxRedesign)}
                        value={this.state.checkBoxState}
                        onClick={()=>{ console.log('CheckBox Clicked')
                        this.handleCheckBoxChange()}} /><h5 className={css(newCliCSS.smallFontRes)}>Mailing Address Same as Company</h5>
                    </span>
                    <div className={css(newCliCSS.buttonArea)}>
                        <button className={css(newCliCSS.buttonRedesign)}
                            onClick={() => {
                                console.log('Clicked Save')
                            }}>Save</button>
                        <button className={css(newCliCSS.buttonRedesign)}
                            onClick={() => {
                                this.resetAllInputBoxes();
                            }} >Reset</button>
                        <button className={css(newCliCSS.buttonRedesign)}
                            onClick={() => {
                                this.resetAllInputBoxes();
                                this.props.toggleNewClient();
                            }} >Cancel</button>

                    </div>
                </div>
            </div>
        )
    }
}

const newCliCSS = StyleSheet.create({
    outerArea: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        marginTop: '-49px',
        zIndex: '101',

    },
    mainModal: {
        width: '85%',
        height: '65vh',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        '@media(max-width: 570px)': {
            height: '90vh',
            paddingLeft: '5px',
            paddingRight: '5px',
        },
    },
    hide: {
        visibility: 'hidden',
    },
    hFormat: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    closeButton: {
        textAlign: 'right',
        marginTop: '5px',
        marginRight: '5px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
        },
    },
    inputArea: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        height: '25px',
        // border: '2px dashed purple',
        '@media(max-width: 570px)': {
            flexDirection: 'column',
            height: '90px',
            // border: '2px dashed purple',
        },
    },
    readjustHeight: {
        height: '190px',
        // border: '2px dashed black',

        '@media(max-width: 570px)': {
            height: '160px',
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // border: '2px dashed black',
        },
    },
    flexR: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '5px',
    },
    checkBoxRedesign: {
        width: '25px',
        height: '25px',
        // background: 'rgba(169,169,169,0.8)',
        // color: 'rgba(169,169,169,0.8)',
    },
    inputAreaColumned: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '85px',
        marginLeft: '25px',
        marginRight: '25px',
        // border: '2px dashed blue',

        '@media(max-width: 570px)': {
            flexDirection: 'column',
            // height: '170px',
            margin: 0,
            height: '75px',
            // border: '2px dashed blue',
        },
    },
    inputBoxStyled: {
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
            color: 'white',
        }
    },
    inputBoxStyledSpacing: {
        marginTop: '10px',
    },
    buttonArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '40px',
        '@media(max-width: 570px)': {
            // flexDirection: 'column',
            // height: '170px',
            margin: 0,
            // height: '75px',
            // border: '2px dashed blue',
        },
    },
    smallFontRes: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '1px 1px 2px black',
        marginTop: '3px',
    },
    buttonRedesign: {
        marginLeft: '20px',
        marginRight: '20px',
        width: '100px',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    },
});