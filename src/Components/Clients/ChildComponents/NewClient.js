import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { postNewClient } from '../../../ducks/reducer';

class NewClient extends Component {
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
        this.postNewClientToDatabase = this.postNewClientToDatabase.bind(this);
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
        if (!this.state.checkBoxState) {
            this.setState({ mailingAddLine1: this.state.companyAddLine1, mailingAddLine2: this.state.companyAddLine2, inputBoxDisabled: true });
        } else {
            this.setState({ mailingAddLine1: '', mailingAddLine2: '', inputBoxDisabled: false });
        }
    }
    postNewClientToDatabase() {
        let newClient = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            phone_number: this.state.phoneNumber,
            email: this.state.emailAddress,
            company: this.state.companyName,
            company_address_line_1: this.state.companyAddLine1,
            company_address_line_2: this.state.companyAddLine2,
            mailing_address_line_1: this.state.mailingAddLine1,
            mailing_address_line_2: this.state.mailingAddLine2
        }
        this.props.postNewClient(newClient);
        this.resetAllInputBoxes();
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
    isDisabled = () => {
        let currentState = ''
        if(this.state.firstName !== '' && 
        this.state.lastName !== '' && 
        this.state.phoneNumber !== '' && 
        this.state.emailAddress !== '' && 
        this.state.companyName !== '' && 
        this.state.companyAddLine1 !== '' && 
        this.state.companyAddLine2 !== '' &&
        this.state.mailingAddLine1 !== '' &&
        this.state.mailingAddLine2 !== '') {
            currentState = true;
        } else {
            currentState = false;
        }
        return currentState;
    }
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
                            onClick={() => {
                                console.log('CheckBox Clicked')
                                this.handleCheckBoxChange()
                            }} /><h5 className={css(newCliCSS.smallFontRes)}>Mailing Address Same as Company</h5>
                    </span>
                    <div className={css(newCliCSS.buttonArea)}>
                        <button className={css(newCliCSS.buttonRedesign)}
                            onClick={() => {
                                this.postNewClientToDatabase();
                                this.props.toggleNewClient();
                                console.log('Clicked Save');
                            }}
                            disabled={!this.isDisabled()}>Save</button>
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
// function mapStateToProps(state) {
//     return {

//     }
// }
let mapDispatchToProps = {
    postNewClient,
}

// export default connect(mapStateToProps, mapDispatchToProps)(NewClient);
export default connect(null, mapDispatchToProps)(NewClient);




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
        ':disabled': {
            background: 'gray',
            border: '2px solid black',
            color: 'black',
        },
    },
});