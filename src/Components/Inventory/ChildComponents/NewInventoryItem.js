import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class NewInventoryItem extends Component {
    constructor() {
        super();
        this.state = {
            productName: '',
            partNumber: '',
            labelDescription: '',
            productCount: 0,
            minimumCount: 0,
            imageURL: '',
            alertWhenLow: false,
        }
        this.productNameEdit = this.productNameEdit.bind( this );
        this.partNumberEdit = this.partNumberEdit.bind( this );
        this.labelDescriptionEdit = this.labelDescriptionEdit.bind( this );
        this.productCountEdit = this.productCountEdit.bind( this );
        this.minimumCountEdit = this.minimumCountEdit.bind( this );
        this.imageURLEdit = this.imageURLEdit.bind( this );
        this.alertWhenLowEdit = this.alertWhenLowEdit.bind( this );
    }

    productNameEdit(e) { this.setState({ productName: e }); }
    partNumberEdit(e) { this.setState({ partNumber: e }); }
    labelDescriptionEdit(e) { this.setState({ labelDescription: e }); }
    productCountEdit(e) { this.setState({ productCount: e }); }
    minimumCountEdit(e) { this.setState({ minimumCount: e })};
    imageURLEdit(e) { this.setState({ imageURL: e }); }
    alertWhenLowEdit() { this.setState({ alertWhenLow: !this.state.alertWhenLow }); }

    render() {

        console.log(this.props)
        return (
            <div className={this.props.newInventoryItemVisibility ? css(subNavCSS.newInventoryMain) : css(subNavCSS.newInventoryMain, subNavCSS.editorHide)} >
                <div className={css(subNavCSS.newItemModalMain)} >
                    <div className={css(subNavCSS.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            onClick={() => {
                                this.props.toggleNewInventory()
                                // this.resetInputs()
                                // this.props.toggleItemEditor()
                            }} /></div>

                    <h1 className={css(subNavCSS.title)}>New Product</h1>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Name: </h4>
                        <input type='text'
                            placeholder='New Product Name'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.productName}
                            onChange={(e) => this.productNameEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Part Number: </h4>
                        <input type='text'
                            placeholder='New Part Number'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.partNumber}
                            onChange={(e)=> this.partNumberEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Description: </h4>
                        <textarea type='text'
                            rows='5'
                            placeholder='New Product Description'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.labelDescription}
                            onChange={(e) => this.labelDescriptionEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Current Count of Product: </h4>
                        <input type='number'
                            placeholder='0'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.productCount}
                            onChange={(e)=> this.productCountEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Minimum Amount of Products needed on hand: </h4>
                        <input type='number'
                            placeholder='0'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.minimumCount}
                            onChange={(e)=> this.minimumCountEdit(e.target.value)} />
                    </div>

                    <div className={css(subNavCSS.flexRow)}>
                        <h4 className={css(subNavCSS.title)}>Product Image: </h4>
                        <input type='text'
                            placeholder='New Product Image URL'
                            className={css(subNavCSS.inputBox)}
                            value={this.state.imageURL}
                            onChange={(e)=> this.imageURLEdit(e.target.value)} />
                    </div>
                
                    <img className='' src={this.state.imageURL} alt='' />

                </div>
            </div>
        )
    }
}

export default NewInventoryItem;

const subNavCSS = StyleSheet.create({
    newInventoryMain: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        // marginTop: '50px',
        marginTop: '-26px',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    h1Rev: {
        margin: 0,
        padding: 0,
        marginLeft: '10px',
        marginRight: '30px',
        textShadow: '2px 2px 4px black',
        ':hover': {
            color: 'rgb(169,169,169)',
            transition: '0.5s all ease',
        }
    },
    title: {
        margin: 0,
        padding: 0,
        textShadow: '2px 2px 4px black',
    },

    newItemModalMain: {
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
    closeButton: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: '5px',
        marginBottom: '5px',
        marginLeft: '20px',
        marginRight: '20px',
    },
    inputBox: {
        width: '50%',
        marginLeft: '5px',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
        border: 'none',
        borderShadow: '2px 2px 4px white',
        textShadow: '1px 1px 2px black',
        '::placeholder': {
            color: 'white',
            //  fontSize: '1.5rem',
        }
    }
});