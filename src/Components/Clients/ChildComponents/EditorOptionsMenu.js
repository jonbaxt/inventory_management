import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import DeleteVerify from './EditorModals/DeleteVerify';

export default class EditorOptionsMenu extends Component {
    constructor() {
        super();
        this.state = {
            deleteVerifyVisible: false,
        }


        this.toggleDeleteVisible = this.toggleDeleteVisible.bind(this);
    }
    toggleDeleteVisible() { this.setState({ deleteVerifyVisible: !this.state.deleteVerifyVisible }); }
    render() {
        //  The Options is to allow precise Axios Put calls to update certain aspects of the client as needed as well as delete the client.
        console.log(this.props);
        return (
            <div className={ this.props.editOptionsVisible ?  css(optionsStyles.optionsMain) : css(optionsStyles.optionsMain, optionsStyles.hide)}>
                <div className={css(optionsStyles.mainBox)} >
                    <div className={css(optionsStyles.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            className={css(optionsStyles.fontAwesStyle)}
                            onClick={() => {
                                console.log('Clicked Editor Options Close Button');
                                this.props.toggleEditVisible();
                            }} />
                    </div>
                    <h2 className={css(optionsStyles.textForm)}>Client Update Options</h2>
                    <h3 className={css(optionsStyles.textForm, optionsStyles.noMargin)}>for</h3>
                    <h3 className={css(optionsStyles.textForm, optionsStyles.noMargin)}>{this.props.currentClientViewed.first_name + ' ' + this.props.currentClientViewed.last_name }</h3>

                    <button className={css(optionsStyles.optionButton)}>Update Name</button>

                    <button className={css(optionsStyles.optionButton)}>Update Phone Number</button>

                    <button className={css(optionsStyles.optionButton)}>Update Email</button>

                    <button className={css(optionsStyles.optionButton)}>Update Company Name</button>

                    <button className={css(optionsStyles.optionButton)}>Update Addresses</button>

                    <button className={css(optionsStyles.deleteButton)}
                        onClick={()=> this.toggleDeleteVisible()}>Delete Client</button>


                </div>
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

        border: '2px dashed red',

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

        border: '2px dashed green',

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

        border: '2px dashed purple',

        ':hover': {
            transition: '1s all ease',
            color: 'rgb(47,79,79)',
        },

    },
    optionButton: {
        width: '180px',
        height: '75px',
        margin: '20px',
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
        height: '75px',
        margin: '20px',
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