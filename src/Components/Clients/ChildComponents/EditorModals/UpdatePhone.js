import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateClientPhoneById } from '../../../../ducks/reducer';

class UpdatePhone extends React.Component {
    constructor() {
        super();
        this.state = {
            phoneChange: '',
        }
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }
    handlePhoneChange(e) { this.setState({ phoneChange: e }); }
    resetPhoneChange() { this.setState({ phoneChange: '' }); }
    render() {
        return (
            <div className={ this.props.updatePhoneVisible ? css(phoneStyles.outerSurface) : css(phoneStyles.outerSurface, phoneStyles.hide) }>
                <div className={css(phoneStyles.modalSheet)}>
                    <h2 className={css(phoneStyles.textForm)}>Update Phone Number</h2>
                    <h4 className={css(phoneStyles.textForm)}>Current Number: {this.props.currentClientViewed.phone_number}</h4>

                    <input type='text' 
                        className={css(phoneStyles.inputBoxStyled)}
                        value={this.state.phoneChange}
                        placeholder='New Number'
                        onChange={(e)=> this.handlePhoneChange(e.target.value)} 
                        />
                    <div className={css(phoneStyles.flexRow)}>
                        <button className={css(phoneStyles.updateButton)}    
                            onClick={()=>{ 
                                this.props.updateClientPhoneById(this.props.currentClientViewed.client_id, 
                                this.state.phoneChange);
                                this.resetPhoneChange();
                                this.props.toggleUpdatePhoneVisible();
                                this.props.toggleEditVisible();
                                // console.log('Clicked. Update')
                            }}
                            disabled={!this.state.phoneChange}>Update</button>
                        <button className={css(phoneStyles.cancelButton)}
                            onClick={()=>{ 
                                this.resetPhoneChange();
                                // console.log('Clicked Reset');
                                }}>Reset</button>
                        <button className={css(phoneStyles.cancelButton)}
                            onClick={()=>{ 
                                this.resetPhoneChange();
                                this.props.toggleUpdatePhoneVisible();
                                // console.log('Clicked Cancel')
                                }}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

const phoneStyles = StyleSheet.create({
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
        height: '22vh',
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
})

export default connect(null, { updateClientPhoneById })(UpdatePhone);