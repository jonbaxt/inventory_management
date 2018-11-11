import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateClientEmailById } from '../../../../ducks/reducer';

class UpdateEmail extends React.Component {
    constructor() {
        super();
        this.state = {
            emailChange: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }
    handleEmailChange(e) { this.setState({ emailChange: e }); }
    resetEmailChange() { this.setState({ emailChange: '' }); }
    render() {
        return (
            <div 
            className={ this.props.updateEmailVisible ? css(emailStyle.outerSurface) : css(emailStyle.outerSurface, emailStyle.hide) }>
            <div className={css(emailStyle.modalSheet)}>
                <h2 className={css(emailStyle.textForm)}>Update Email</h2>
                <h4 className={css(emailStyle.textForm)}>Current Email: {this.props.currentClientViewed.email}</h4>

                <input type='text' 
                    className={css(emailStyle.inputBoxStyled)}
                    value={this.state.emailChange}
                    placeholder='New Email'
                    onChange={(e)=> this.handleEmailChange(e.target.value)} 
                    />
                <div className={css(emailStyle.flexRow)}>
                    <button className={css(emailStyle.updateButton)}    
                        onClick={()=>{ 

                            this.props.updateClientEmailById(this.props.currentClientViewed.client_id, 
                            this.state.emailChange);
                            this.resetEmailChange();
                            this.props.toggleUpdateEmailVisible();
                            this.props.toggleEditVisible();
                        }}
                        disabled={!this.state.emailChange}>Update</button>
                    <button className={css(emailStyle.cancelButton)}
                        onClick={()=>{ 
                            this.resetEmailChange();
                            }}>Reset</button>
                    <button className={css(emailStyle.cancelButton)}
                        onClick={()=>{ 
                            this.resetEmailChange();
                            this.props.toggleUpdateEmailVisible();
                            }}>Cancel</button>
                </div>
            </div>
        </div>
        )
    }
}

const emailStyle = StyleSheet.create({
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

export default connect(null, { updateClientEmailById })(UpdateEmail);