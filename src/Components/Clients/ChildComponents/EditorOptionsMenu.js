import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import UpdateName from './EditorModals/UpdateName';
import UpdatePhone from './EditorModals/UpdatePhone';
import UpdateEmail from './EditorModals/UpdateEmail';
import UpdateCompany from './EditorModals/UpdateCompany';
import UpdateAddresses from './EditorModals/UpdateAddresses';
import DeleteVerify from './EditorModals/DeleteVerify';

export default class EditorOptionsMenu extends Component {
    constructor() {
        super();
        this.state = {
            updateNameVisible: false,
            updatePhoneVisible: false,
            updateEmailVisible: false,
            updateCompanyVisible: false,
            updateAddressVisible: false,
            deleteVerifyVisible: false,
        }
        this.toggleNameVisible = this.toggleNameVisible.bind(this);
        this.toggleUpdatePhoneVisible = this.toggleUpdatePhoneVisible.bind(this);
        this.toggleUpdateEmailVisible = this.toggleUpdateEmailVisible.bind(this);
        this.toggleUpdateCompanyVisible = this.toggleUpdateCompanyVisible.bind(this);
        this.toggleUpdateAddressVisible = this.toggleUpdateAddressVisible.bind(this);
        this.toggleDeleteVisible = this.toggleDeleteVisible.bind(this);
    }
    toggleNameVisible() { this.setState({ updateNameVisible: !this.state.updateNameVisible }); }
    toggleUpdatePhoneVisible() { this.setState({ updatePhoneVisible: !this.state.updatePhoneVisible }); }
    toggleUpdateEmailVisible() { this.setState({ updateEmailVisible: !this.state.updateEmailVisible }); }
    toggleUpdateCompanyVisible() { this.setState({ updateCompanyVisible: !this.state.updateCompanyVisible }); }
    toggleUpdateAddressVisible() { this.setState({ updateAddressVisible: !this.state.updateAddressVisible }); }
    toggleDeleteVisible() { this.setState({ deleteVerifyVisible: !this.state.deleteVerifyVisible }); }
    render() {
        //  The Options is to allow precise Axios Put calls to update certain aspects of the client as needed as well as delete the client.
        // console.log(this.props);
        return (
            <div className={this.props.editOptionsVisible ? css(optionsStyles.optionsMain) : css(optionsStyles.optionsMain, optionsStyles.hide)}>
                <div className={css(optionsStyles.mainBox)} >
                    <div className={css(optionsStyles.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            className={css(optionsStyles.fontAwesStyle)}
                            onClick={() => {
                                // console.log('Clicked Editor Options Close Button');
                                this.props.toggleEditVisible();
                            }} />
                    </div>
                    <h2 className={css(optionsStyles.textForm, optionsStyles.noMargin)}>Client Update Options</h2>
                    <h3 className={css(optionsStyles.textForm, optionsStyles.noMargin)}>for</h3>
                    <h3 className={css(optionsStyles.textForm, optionsStyles.noMargin)}>{this.props.currentClientViewed.first_name + ' ' + this.props.currentClientViewed.last_name}</h3>

                    <button className={css(optionsStyles.optionButton)}
                        onClick={() => {
                            this.toggleNameVisible()
                        }}>Update Name</button>

                    <button className={css(optionsStyles.optionButton)}
                        onClick={() => {
                            this.toggleUpdatePhoneVisible()
                        }}>Update Phone Number</button>

                    <button className={css(optionsStyles.optionButton)}
                        onClick={()=> {
                            this.toggleUpdateEmailVisible()
                        }}>Update Email</button>

                    <button className={css(optionsStyles.optionButton)}
                        onClick={()=> 
                            this.toggleUpdateCompanyVisible()}>Update Company Name</button>

                    <button className={css(optionsStyles.optionButton)}
                        onClick={()=> this.toggleUpdateAddressVisible()}>Update Addresses</button>

                    <button className={css(optionsStyles.deleteButton)}
                        onClick={() => this.toggleDeleteVisible()}>Delete Client</button>


                </div>
                <UpdateName
                    currentClientViewed={this.props.currentClientViewed}
                    updateNameVisible={this.state.updateNameVisible}
                    toggleNameVisible={this.toggleNameVisible}
                    toggleEditVisible={this.props.toggleEditVisible}
                />
                <UpdatePhone
                    currentClientViewed={this.props.currentClientViewed}
                    updatePhoneVisible={this.state.updatePhoneVisible}
                    toggleUpdatePhoneVisible={this.toggleUpdatePhoneVisible}
                    toggleEditVisible={this.props.toggleEditVisible}
                />
                <UpdateEmail 
                    currentClientViewed={this.props.currentClientViewed}
                    updateEmailVisible={this.state.updateEmailVisible}
                    toggleUpdateEmailVisible={this.toggleUpdateEmailVisible}
                    toggleEditVisible={this.props.toggleEditVisible}
                />
                <UpdateCompany 
                    currentClientViewed={this.props.currentClientViewed}
                    updateCompanyVisible={this.state.updateCompanyVisible}
                    toggleUpdateCompanyVisible={this.toggleUpdateCompanyVisible}
                    toggleEditVisible={this.props.toggleEditVisible}
                />
                <UpdateAddresses 
                    currentClientViewed={this.props.currentClientViewed}
                    updateAddressVisible={this.state.updateAddressVisible}
                    toggleUpdateAddressVisible={this.toggleUpdateAddressVisible}
                    toggleEditVisible={this.props.toggleEditVisible}
                />
                <DeleteVerify
                    currentClientViewed={this.props.currentClientViewed}
                    deleteVerifyVisible={this.state.deleteVerifyVisible}
                    toggleEditVisible={this.props.toggleEditVisible}
                    toggleDeleteVisible={this.toggleDeleteVisible}
                />
            </div>
        )
    }
}


const optionsStyles = StyleSheet.create({
    optionsMain: {
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
    mainBox: {
        width: '300px',
        height: '65vh',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',

        // border: '2px dashed red',

        '@media(max-width: 570px)': {
            height: '90vh',
            paddingLeft: '5px',
            paddingRight: '5px',
        },
    },
    hide: {
        visibility: 'hidden',
    },
    textForm: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        marginTop: '20px',
    },
    noMargin: {
        margin: 0,
    },
    closeButton: {
        width: '100%',
        height: '60px',
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // justifyContent: 'right',
        marginTop: '5px',
        marginRight: '5px',

        // border: '2px dashed green',

    },
    fontAwesStyle: {

        fontSize: '20px',
        color: 'white',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        textAlign: 'right',
        cursor: 'pointer',

        transition: '1s all ease',

        // border: '2px dashed purple',

        ':hover': {
            transition: '1s all ease',
            color: 'rgb(47,79,79)',
        },

    },
    optionButton: {
        width: '180px',
        height: '90px',
        margin: '12px',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',

        transition: '0.2s all ease',

        ':hover': {
            transition: '0.2s all ease',
            background: 'white',
            // background: 'rgb(47,79,79)',
            color: 'rgb(47, 79, 79)',
            // color: 'white',
            border: '2px solid rgb(47, 79, 79)',
            // color: 'rgb(47,79,79)',
        },
    },
    deleteButton: {
        width: '180px',
        height: '90px',
        margin: '12px',
        // background: 'rgb(47,79,79)',
        background: 'red',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',

        transition: '0.2s all ease',

        ':hover': {
            transition: '0.2s all ease',
            color: 'red',
            // background: 'white',
            background: 'rgb(128,0,0)',
            border: '2px solid red',
        },
    }
});