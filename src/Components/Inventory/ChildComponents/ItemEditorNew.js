import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class ItemEditorNew extends Component {

    render() {

        return (
            <div className={ this.props.editorVisibility ?  css(editStyles.mainArea) : css(editStyles.mainArea, editStyles.editorHide)}>

                <section className={css(editStyles.editorMain)}>
                <div className={css(editStyles.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            onClick={() => {
                                // this.resetInputs()
                                this.props.toggleItemEditor()
                            }} /></div>
                <h2 className={css(editStyles.textRedo)}>Product Editor Options</h2>
                <h3 className={css(editStyles.textRedo)}>dfd</h3>

                
                </section>

            </div>
        )
    }
}

const editStyles = StyleSheet.create({
    mainArea: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // marginTop: '50px',
        // marginTop: '-26px',
        zIndex: '101',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    // Down here is for the editor
    editorMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'auto',
        width: '75vw',
        height: '90vh',
        margin: '0 auto',
        // marginTop: '5px',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    textRedo: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    closeButton: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
    },

});

export default ItemEditorNew;