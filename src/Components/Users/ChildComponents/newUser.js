import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


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
    }
    handleFirstNameChange(e) { this.setState({ firstNameBox: e }); }
    handleLastNameChange(e) { this.setState({ lastNameBox: e }); }
    handleIdPicChange(e) { this.setState({ idPicBox: e }); }
    handlePhoneNumberChange(e) { this.setState({ phoneNumberBox: e }); }
    handleEmailChange(e) { this.setState({ emailBox: e }); }
    handleAddressLine1Change(e) { this.setState({ addressLine1Box: e }); }
    handleAddressLine2Change(e) { this.setState({ addressLine2Box: e }); }
    handleEmployeeRoleChange(e) { this.setState({ employeeRoleBox: e }); }
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
                        <div className={css(styles.closeButton)} onClick={() => this.props.toggleNewEmployeeVis()}>Close</div>
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
        // cursor: 'pointer',
        // fontSize: '20px',
        // ':hover': {
        //     transition: '0.5s all ease',
        //     color: 'rgb(47,79,79)',
        // },
    },
    closeButton: {
        // textAlign: 'right',
        // marginTop: '5px',
        // marginRight: '5px',
        // color: 'white',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
        ':hover': {
            transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
        },
    },
});

export default NewUser;