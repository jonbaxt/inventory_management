import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { updateProductImage } from '../../../../ducks/reducer';
import noImage from '../../../NoImage.png'

class ImageEdit extends Component {
    constructor() {
        super();
        this.state = {
            urlBox: '',
        }
        this.handleURLChange = this.handleURLChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }
    handleURLChange(e) { this.setState({ urlBox: e }); }
    resetInput() { this.setState({ urlBox: '' }); }
    render() {
        /* 
        imageEditView={this.state.imageEditView}
        toggleItemEditor={this.props.toggleItemEditor}
        toggleImageEditChange={this.toggleImageEditChange}
        currentInventoryItem={this.props.currentInventoryItem}
        productName={productName}
        image={image}
        */

        let currentImage = <img className={css(styles.imageSize)} src={this.props.image} alt='' />
        let newImage = this.state.urlBox !== '' ? <img className={css(styles.imageSize)} src={this.state.urlBox} alt='' /> : <img className={css(styles.imageSize)} src={noImage} alt='' />
        return (
            <div className={this.props.imageEditView
                ? css(styles.mainArea) : css(styles.mainArea, styles.editorHide)}>
                <section className={css(styles.modal)} >
                    <h3 className={css(styles.textRedo, styles.marginGapTop)}>Change Product Image</h3>
                    <h5 className={css(styles.textRedo)}>Name:</h5>
                    <h6 className={css(styles.textRedo)}>{this.props.productName}</h6>
                    <div className={css(styles.flRow)} >
                        <span className={css(styles.flCol)} >
                            <h4 className={css(styles.textRedo, styles.marginGapTop, styles.underline)}>Current Image: </h4>
                            {currentImage}
                        </span>
                        <span className={css(styles.flCol)} >
                            <h4 className={css(styles.textRedo, styles.marginGapTop, styles.underline)}>New Image: </h4>
                            {newImage}
                        </span>
                    </div>
                    {/* <h4 className={css(styles.textRedo)}>{this.props.label} */}
                    {/* </h4> */}

                    <input
                        type='text'
                        className={css(styles.inputBoxStyled)}
                        placeholder='Image URL'
                        value={this.state.urlBox}
                        onChange={(e) => { this.handleURLChange(e.target.value) }} />

                    <div className={css(styles.flRow)}>
                        <button className={css(styles.changeButton)}
                            disabled={!this.state.urlBox}
                            onClick={() => {
                                this.props.updateProductImage(this.props.currentInventoryItem, this.state.urlBox);
                                this.resetInput();
                                this.props.toggleImageEditChange();
                                this.props.toggleItemEditor();
                            }}>Change</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => { this.resetInput(); }}>Reset</button>
                        <button className={css(styles.buttonStyle)}
                            onClick={() => {
                                this.props.toggleImageEditChange();
                            }} >Close</button>
                    </div>
                </section>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    mainArea: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: '102',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    // Down here is for the editor
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        overflow: 'auto',
        width: '318px',
        margin: '0 auto',
        background: 'rgb(192,192,192)',
        boxShadow: '2px 2px 4px white',
        zIndex: '10',
    },
    flRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flCol: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonStyle: {
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '15px',
        width: '80px',
        height: '40px',
        color: 'white',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px black',
        border: '2px solid white',
        boxShadow: '2px 2px 4px black',
        cursor: 'pointer',
        ':hover': {
            background: 'white',
            color: 'grey',
            border: '2px solid grey',
        },
    },
    changeButton: {
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '10xpx',
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
    marginGapTop: {
        marginTop: '15px',
    },
    marginGapBottom: {
        marginBottom: '15px',
    },
    flRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textRedo: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    inputBoxStyled: {
        margin: '0 auto',
        width: '305px',
        // width: '125px',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
        // textAlign: 'center',
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
    underline: {
        textDecorationLine: 'underline',
    },
    imageSize: {
        width: '150px',
    },
    imageDiv: {
        display: 'flex',
        justifyContent: 'center',
    },
});

export default connect(null, { updateProductImage })(ImageEdit);