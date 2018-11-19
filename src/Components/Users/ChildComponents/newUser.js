import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class NewUser extends Component {
    constructor() {
        super();
        this.state = {
            firstNameBox: '',
            lastNameBox: '',
            idPicBox: '',
            phoneNumberBox: '',
            emailBox: '',
            addressLine1Box: '',
            addressLine2Box: '',
            employeeRoleBox: '',
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleIdPicChange = this.handleIdPicChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressLine1Change = this.handleAddressLine1Change.bind(this);
        this.handleAddressLine2Change = this.handleAddressLine2Change.bind(this);
        this.handleEmployeeRoleChange = this.handleEmployeeRoleChange.bind(this);
        this.resetAll = this.resetAll.bind(this);
    }
    handleFirstNameChange(e) { this.setState({ firstNameBox: e }); }
    handleLastNameChange(e) { this.setState({ lastNameBox: e }); }
    handleIdPicChange(e) { this.setState({ idPicBox: e }); }
    handlePhoneNumberChange(e) { this.setState({ phoneNumberBox: e }); }
    handleEmailChange(e) { this.setState({ emailBox: e }); }
    handleAddressLine1Change(e) { this.setState({ addressLine1Box: e }); }
    handleAddressLine2Change(e) { this.setState({ addressLine2Box: e }); }
    handleEmployeeRoleChange(e) { this.setState({ employeeRoleBox: e }); }
    resetAll() { this.setState({ firstNameBox: '', lastNameBox: '', idPicBox: '', phoneNumberBox: '', emailBox: '', addressLine1Box: '', addressLine2Box: '', employeeRoleBox: '' }); }
    // employee_id(pin): 1
    // first_name(pin): "Dave"
    // last_name(pin): "Thomas"
    // id_pic(pin): "https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg"
    // phone_number(pin): "801-888-2541"
    // email(pin): "dave@wendys.com"
    // address_line_1(pin): "123 E Wendys Lane"
    // address_line_2(pin): "Provo, UT 84601"
    // employee_role(pin): "Shelf Stocker"

    render() {
        // console.log(this.props.toggleNewEmployeeVis)
        return (
            <div className={this.props.newEmployeeVisible ? css(styles.outerArea) : css(styles.outerArea, styles.hide)}>
                <section className={css(styles.mainModal)}>
                    <div className={css(styles.closeButtonArea)}>
                    <FontAwesomeIcon icon={faTimesCircle} 
                        className={css(styles.closeButton)} 
                        onClick={() => this.props.toggleNewEmployeeVis()}
                    />
                    </div>

                    <h2 className={css(styles.text)} >Create a New User</h2>
                    <div className={css(styles.rowed)} >
                        <h5 className={css(styles.text)}>Name:</h5>
                        <input className={css(styles.inputBoxStyled)} 
                            type='text'
                            placeholder='First'
                            value={this.state.firstNameBox}
                            onChange={(e) => this.handleFirstNameChange(e.target.value)} />
                        <input className={css(styles.inputBoxStyled)} 
                            type='text'
                            placeholder='Last'
                            value={this.state.lastNameBox}
                            onChange={(e)=> this.handleLastNameChange(e.target.value)} />
                    </div>
                    <div className={css(styles.rowed)} >
                        <h5 className={css(styles.text)}>Id Pic:</h5>
                        <input className={css(styles.inputBoxStyled)} 
                            type='text'
                            placeholder='URL'
                            value={this.state.idPicBox}
                            onChange={(e)=> this.handleIdPicChange(e.target.value)} />
                    </div>
                    <div className={css(styles.rowed)} >
                        <h5 className={css(styles.text)}>Phone:</h5>
                        <input className={css(styles.inputBoxStyled)} 
                            type='text'
                            placeholder='Phone Number'
                            value={this.state.phoneNumberBox}
                            onChange={(e)=> this.handlePhoneNumberChange(e.target.value)} />
                    </div>
                    <div className={css(styles.rowed)} >
                        <h5 className={css(styles.text)}>Address:</h5>
                        <div className={css(styles.columned)}>
                            <input className={css(styles.inputBoxStyled)} 
                                type='text'
                                placeholder='10 E 400 W'
                                value={this.state.addressLine1Box}
                                onChange={(e)=> this.handleAddressLine1Change(e.target.value)} />
                            <input className={css(styles.inputBoxStyled)} 
                                type='text'
                                placeholder='Provo, UT 84064'
                                value={this.state.addressLine2Box}
                                onChange={(e)=> this.handleAddressLine2Change(e.target.value)} />
                        </div>
                    </div>
                    <div className={css(styles.rowed)} >
                        <h5 className={css(styles.text)}>Warehouse Role:</h5>
                        <input className={css(styles.inputBoxStyled)} 
                            type='text'
                            placeholder='Shelf Stocker'
                            value={this.state.employeeRoleBox}
                            onChange={(e)=> this.handleEmployeeRoleChange(e.target.value)} />
                    </div>
                    <div className={css(styles.rowed)} >
                        <button className={css(styles.buttonRedesign)}
                            onClick={()=> console.log('Create Clicked')}>Create</button>
                        <button className={css(styles.buttonRedesign)}
                            onClick={()=> this.resetAll()}>Reset</button>
                        <button className={css(styles.buttonRedesign)}
                            onClick={()=> this.props.toggleNewEmployeeVis()}>Cancel</button>
                    
                    </div>
                </section>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    outerArea: {
        position: 'fixed',
        display: 'flex',
        marginTop: '-49px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        zIndex: '101',
        '@media(max-width: 1220px)': {
            marginTop: '-210px',
        },
        '@media(max-width: 980px)': {
            marginTop: '-370px',
        },
        '@media(max-width: 740px)': {
            marginTop: '-530px',
        },
        '@media(max-width: 515px)': {
            marginTop: '-550px',
        },
        '@media(max-width: 500px)': {
            marginTop: '-1350px',
            zIndex: '110',
        },

    },
    mainModal: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: '85%',
        height: '65vh',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        '@media(max-width: 570px)': {
            height: '70vh',
            // paddingLeft: '5px',
            // paddingRight: '5px',
        },
    },
    hide: {
        visibility: 'hidden',
    },
    closeButtonArea: {
        textAlign: 'right',
        marginTop: '5px',
        marginRight: '5px',
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    closeButton: {
        cursor: 'pointer',
        // fontSize: '20px',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
        },
    },
    rowed: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // height: '25px',
        margin: 0,
        padding: 0,
        // border: '2px dotted green',
    },
    columned: {
        display: 'flex',
        flexDirection: 'column',
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
            textShadow: '1px 1px 2px grey',
        }
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
    text: {
        color: 'white',
        textShadow: '2px 2px 4px black',
        margin: 0,
        padding: 0,
    }
});

export default NewUser;