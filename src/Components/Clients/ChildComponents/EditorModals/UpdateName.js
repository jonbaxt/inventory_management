import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateClientNameById } from '../../../../ducks/reducer';

class UpdateName extends React.Component {
    constructor() {
        super();
        this.state = {
            firstNameChange: '',
            secondNameChange: '',
            firstNameCheckbox: true,
            secondNameCheckbox: true,
        }
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleSecondName = this.handleSecondName.bind(this);
        this.changeFirstNameCheckbox = this.changeFirstNameCheckbox.bind(this);
        this.firstNameCheckboxChange = this.firstNameCheckboxChange.bind(this);
        this.changeSecondNameCheckbox = this.changeSecondNameCheckbox.bind(this);
        this.secondNameCheckboxChange = this.secondNameCheckboxChange.bind(this);
        this.resetInputs = this.resetInputs.bind(this);
    }
    handleFirstName(e) { this.setState({ firstNameChange: e }); }
    handleSecondName(e) { this.setState({ secondNameChange: e }); }
    resetInputs() { this.setState({ firstNameChange: '', secondNameChange: '' }); }
    changeFirstNameCheckbox() { this.setState({ firstNameCheckbox: !this.state.firstNameCheckbox}); }
    changeSecondNameCheckbox() { this.setState({ secondNameCheckbox: !this.state.secondNameCheckbox }); }
    firstNameCheckboxChange() {
        if(this.state.firstNameCheckbox){
        this.setState({ firstNameChange: this.props.currentClientViewed.first_name });
        } else {
            this.setState({ firstNameChange: ''});
        }
    }
    secondNameCheckboxChange() {
        if(this.state.secondNameCheckbox){
            this.setState({ secondNameChange: this.props.currentClientViewed.last_name });
        } else {
            this.setState({ secondNameChange: '' });
        }
    }
    isUpdateButtonDisabled = () => {
        let isDisabled = '';
        if(this.state.firstNameChange === '' || this.state.secondNameChange === ''){
            isDisabled = true;
        } else {
            isDisabled = false;
        }
        return isDisabled;
    }
    render() {

        return (
            <div className={this.props.updateNameVisible ? css(nameStyles.outerSurface) : css(nameStyles.outerSurface, nameStyles.hide)}>
                <div className={css(nameStyles.modalSheet)}>
                    <h2 className={css(nameStyles.textForm)}>Update Name:</h2>

                    <h4 className={css(nameStyles.textForm)}>First Name</h4>
                    <div className={css(nameStyles.flexRow)}>
                        <input type='checkbox'
                            value={this.state.firstNameCheckbox}
                            onChange={(e) => {
                                this.changeFirstNameCheckbox();
                                this.firstNameCheckboxChange();
                                console.log(`first name ${e.target.value}`)
                            }}
                            className={css(nameStyles.checkBoxRedesign)} />
                        <h6 className={css(nameStyles.textForm)}>Keep Current Name</h6>
                    </div>

                    <input type='text' className={css(nameStyles.inputBoxStyled)}
                        value={this.state.firstNameChange}
                        onChange={(e) => this.handleFirstName(e.target.value)}
                        placeholder={this.props.currentClientViewed.first_name}
                        disabled={!this.state.firstNameCheckbox} />

                    <h4 className={css(nameStyles.textForm)}>Last Name</h4>
                    <div className={css(nameStyles.flexRow)}>
                        <input type='checkbox'
                            onChange={(e) => {
                                this.changeSecondNameCheckbox();
                                this.secondNameCheckboxChange();
                                console.log(`last name ${e.target.value}`)
                            }}
                            className={css(nameStyles.checkBoxRedesign)} />
                        <h6 className={css(nameStyles.textForm)}>Keep Current Name</h6>
                    </div>

                    <input type='text' className={css(nameStyles.inputBoxStyled)}
                        value={this.state.secondNameChange}
                        onChange={(e) => this.handleSecondName(e.target.value)}
                        placeholder={this.props.currentClientViewed.last_name}
                        disabled={!this.state.secondNameCheckbox} />

                    <div className={css(nameStyles.flexRow)}>
                        <button className={css(nameStyles.updateButton)}
                            onClick={()=>{
                                this.props.updateClientNameById(this.props.currentClientViewed.client_id, this.state.firstNameChange, this.state.secondNameChange);
                                this.resetInputs();
                                this.props.toggleNameVisible();
                                this.props.toggleEditVisible();
                                console.log('clicked update')
                            }}
                            disabled={this.isUpdateButtonDisabled()} >Update</button>
                        <button className={css(nameStyles.cancelButton)}
                            onClick={() => {
                                this.resetInputs();
                            }}>Reset</button>
                        <button className={css(nameStyles.cancelButton)}
                            onClick={() => {
                                this.resetInputs();
                                this.props.toggleNameVisible();
                            }}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

const nameStyles = StyleSheet.create({
    outerSurface: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        background: 'rgba(47,79,79,0.5)',
        visibility: 'visible',
        zIndex: '102',
    },
    hide: {
        visibility: 'hidden',
    },
    modalSheet: {
        width: '315px',
        height: '35vh',
        paddingTop: '10px',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',

        // border: '2px dashed red',

        // '@media(max-width: 570px)': {
        //     height: '90vh',
        //     paddingLeft: '5px',
        //     paddingRight: '5px',
        // },
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
    checkBoxRedesign: {
        width: '12px',
        height: '12px',
        // background: 'rgba(169,169,169,0.8)',
        // color: 'rgba(169,169,169,0.8)',
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

export default connect(null, { updateClientNameById })(UpdateName);