import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateClientCompanyById } from '../../../../ducks/reducer';

class UpdateCompany extends React.Component {
    constructor() {
        super();
        this.state = {
            companyChange: '',
        }
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.resetCompanyChange = this.resetCompanyChange.bind(this);
    }
    handleCompanyChange(e) { this.setState({ companyChange: e }); }
    resetCompanyChange() { this.setState({ companyChange: '' }); }
    render() {
        return (
            <div
                className={this.props.updateCompanyVisible ? css(companyStyle.outerSurface) : css(companyStyle.outerSurface, companyStyle.hide)}>
                <div className={css(companyStyle.modalSheet)}>
                    <h2 className={css(companyStyle.textForm)}>Update Company</h2>
                    <h4 className={css(companyStyle.textForm)}>Current Company Name:<br /> {this.props.currentClientViewed.company}</h4>

                    <input type='text'
                        className={css(companyStyle.inputBoxStyled)}
                        value={this.state.companyChange}
                        placeholder='New Company Name'
                        onChange={(e) => this.handleCompanyChange(e.target.value)}
                    />
                    <div className={css(companyStyle.flexRow)}>
                        <button className={css(companyStyle.updateButton)}
                            onClick={() => {

                                this.props.updateClientCompanyById(this.props.currentClientViewed.client_id,
                                    this.state.companyChange);
                                this.resetCompanyChange();
                                this.props.toggleUpdateCompanyVisible();
                                this.props.toggleEditVisible();
                            }}
                            disabled={!this.state.companyChange}>Update</button>
                        <button className={css(companyStyle.cancelButton)}
                            onClick={() => {
                                this.resetCompanyChange();
                            }}>Reset</button>
                        <button className={css(companyStyle.cancelButton)}
                            onClick={() => {
                                this.resetCompanyChange();
                                this.props.toggleUpdateCompanyVisible();
                            }}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}


const companyStyle = StyleSheet.create({
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
        width: '315px',
        height: '25vh',
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
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
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
            color: 'black',
        }
    },
    updateButton: {
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
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
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        width: '80px',
        height: '40px',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px black',
        border: '2px solid white',
        boxShadow: '2px 2px 4px black',
        background: '',
        cursor: 'pointer',
        ':hover': {
            background: 'white',
            color: 'grey',
            border: '2px solid grey',
        },
    },
});

export default connect(null, { updateClientCompanyById })(UpdateCompany);