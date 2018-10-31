import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { setProductNameForEditor } from '../../../ducks/reducer';

class ItemEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            nameChangeActive: false,
            labelChangeActive: false,
            currentInventoryActive: false,
            nameTextBox: '',
            // partTextBox: '',
            labelTextBox: '',
            currentCountTextBox: '',
            minimumCountTextBox: '',
            priceTextBox: '',
            imageTextBox: '',

            currentProductName: '',
            currentLabel: '',
            currentInventory: '',
        }
        this.handleNameEdit = this.handleNameEdit.bind(this);
        // this.handlePartEdit = this.handlePartEdit.bind(this);
        this.handleLabelEdit = this.handleLabelEdit.bind(this);
        this.handleCurrentCountEdit = this.handleCurrentCountEdit.bind(this);
        this.handleMinimumCountEdit = this.handleMinimumCountEdit.bind(this);
        this.handlePriceEdit = this.handlePriceEdit.bind(this);
        this.handleImageEdit = this.handleImageEdit.bind(this);
        this.resetInputs = this.resetInputs.bind(this);
    }
    handleNameEdit(e) {
        this.setState({ nameTextBox: e });
        this.props.setProductNameForEditor(this.state.nameTextBox);
    }
    // handlePartEdit(e) { this.setState({ partTextBox: e }); }
    handleLabelEdit(e) { this.setState({ labelTextBox: e }); }
    handleCurrentCountEdit(e) { this.setState({ currentCountTextBox: e }); }
    handleMinimumCountEdit(e) { this.setState({ minimumCountTextBox: e }); }
    handlePriceEdit(e) { this.setState({ priceTextBox: e }); }
    handleImageEdit(e) { this.setState({ imageTextBox: e }); }
    toggleNameChange = () => { this.setState({ nameChangeActive: !this.state.nameChangeActive }); }
    toggleLabelChange = () => { this.setState({ labelChangeActive: !this.state.labelChangeActive }); }
    resetInputs() {
        this.setState({ nameTextBox: '', partTextBox: '', labelTextBox: '', currentCountTextBox: 0, minimumCountTextBox: 0, priceTextBox: 0, imageTextBox: '' });
    }

    render() {
        console.log(this.props);
        let productDetails = this.props.inventory.filter((product) => product.inventory_id === this.props.currentInventoryItem);
        let detailsObject = '';
        let productName = '';
        let partNumber = '';
        let itemPrice = '';
        let label = '';
        let productCount = '';
        let minimumProductRequired = '';
        let image = '';
        if (this.props.inventory.length !== 0) {
            detailsObject = productDetails[0];
            productName = detailsObject.product_name;
            partNumber = detailsObject.part_number;
            itemPrice = detailsObject.price;
            label = detailsObject.product_label;
            productCount = detailsObject.current_count;
            minimumProductRequired = detailsObject.minimum_stock;
            image = detailsObject.product_image;
            // this.handleNameEdit(productName);
        }

        let productNameChange = this.state.nameChangeActive ? <div className={css(editorCSS.inputDiv)}>
            <h3 className={css(editorCSS.h3Form)}>Name:</h3>
            <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder={productName}
                value={this.state.nameTextBox}
                onChange={(e) => this.handleNameEdit(e.target.value)} />
            <div >
                <button onClick={() => {
                    productName = this.state.nameTextBox;
                    this.toggleNameChange();
                }} >Change</button>
                <button onClick={() => {
                    this.handleNameEdit('');
                    this.toggleNameChange()
                }}>Cancel</button>
            </div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Name: <span className={css(editorCSS.originalText)}>{productName}</span></h3>
                <div><button onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleNameChange()
                }}>Edit</button></div>
            </div>

        let labelChange = this.state.labelChangeActive ? <div className={css(editorCSS.inputDiv)}>
            <h3 className={css(editorCSS.h3Form)}>Label / Description:</h3>
            <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder={label}
                value={this.state.labelTextBox}
                onChange={(e) => this.handleLabelEdit(e.target.value)} />
            <div >
                <button onClick={() => {
                    // productName = this.state.nameTextBox;
                    this.toggleLabelChange();
                }} >Change</button>
                <button onClick={() => {
                    this.handleLabelEdit('');
                    // this.handleNameEdit('');
                    this.toggleLabelChange()
                }}>Cancel</button>
            </div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Label / Description:  <span className={css(editorCSS.originalText)}>{label}</span></h3>
                <div><button onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleLabelChange()
                }}>Edit</button></div>
            </div>


        return (
            <div className={this.props.editorVisibility ? css(editorCSS.editorMain) : css(editorCSS.editorMain, editorCSS.editorHide)} >

                <section className={css(editorCSS.editorModalMain)} >
                    <div className={css(editorCSS.closeButton)}>
                        <FontAwesomeIcon icon={faTimesCircle}
                            onClick={() => {
                                this.resetInputs()
                                this.props.toggleItemEditor()
                            }} /></div>

                    <h2 className={css(editorCSS.h2Form)}>Product Details Editor</h2>
                    <h3 className={css(editorCSS.h3Form)}>Product # <span className={css(editorCSS.originalText)}>{this.props.currentInventoryItem}</span></h3>

                    <br />
                    {productNameChange}
                    <br />
                    <div className={css(editorCSS.inputDiv)}>
                        <h3 className={css(editorCSS.h3Form)}>Part # <span className={css(editorCSS.originalText)}>{partNumber}</span></h3>
                    </div>
                    {/* <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder='Part #' */}
                    {/* value={this.state.partTextBox} */}
                    {/* onChange={(e) => this.handlePartEdit(e.target.value)} /> */}
                    <br />
                    <br />

                    {labelChange}
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className={css(editorCSS.inputDiv)}>
                        <h3 className={css(editorCSS.h3Form)}>Current Inventory Count: <span className={css(editorCSS.originalText)}>{productCount}</span></h3>
                        <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder='Count'
                            value={this.state.currentCountTextBox}
                            onChange={(e) => this.handleCurrentCountEdit(e.target.value)} />
                    </div>
                    <br />
                    <br />

                    <h3 className={css(editorCSS.h3Form)}>Minimum Product Required on Hand: <span className={css(editorCSS.originalText)}>{minimumProductRequired}</span></h3>
                    <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder='Minimum Stock Required'
                        value={this.state.minimumCountTextBox}
                        onChange={(e) => this.handleMinimumCountEdit(e.target.value)} />

                    <h3 className={css(editorCSS.h3Form)}>Price: <span className={css(editorCSS.originalText)}>${itemPrice}</span></h3>
                    <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder='Price'
                        value={this.state.priceTextBox}
                        onChange={(e) => this.handlePriceEdit(e.target.value)} />

                    <h3 className={css(editorCSS.h3Form)}>Product Image:</h3>
                    <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder='New Image URL'
                        value={this.state.imageTextBox}
                        onChange={(e) => this.handleImageEdit(e.target.value)} />

                    <img src={image} alt='' className={css(editorCSS.pictureSize)} />
                    <br />
                    <br />
                    <button className={css(editorCSS.submitButton)} >Save Changes</button>
                    <br />
                </section>

            </div>
        )
    }
}

const editorCSS = StyleSheet.create({
    editorMain: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        background: 'rgba(112,128,144, 0.8)',
        visibility: 'visible',
        // marginTop: '50px',
        // marginTop: '-26px',
        zIndex: '101',
        color: 'white',
    },
    editorHide: {
        visibility: 'hidden',
    },
    // Down here is for the editor
    editorModalMain: {
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
    h2Form: {
        margin: '15px 0px 15px 0px',
        padding: 0,
        textShadow: '2px 2px 4px black',
    },
    h3Form: {
        margin: '5px 0px 5px 10px',
        padding: 0,
        // textDecorationLine: 'underline',
        textAlign: 'left',
        textShadow: '1px 1px 1.5px black',
    },
    originalText: {
        fontSize: '20px',
        textDecorationLine: 'underline',
        // textDecorationLine: 'none',
        fontFamily: 'arial',
    },
    pictureSize: {
        width: '150px',
        marginLeft: '30px',
    },
    closeButton: {
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        fontSize: '20px',
    },
    flexRowed: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputBoxStyled: {
        width: '98%',
        height: '20px',
        marginLeft: '5px',
        // background: 'rgba(0,0,0, 0.6)',
        background: 'rgba(169,169,169,0.8)',
        color: 'white',
        textShadow: '1px 1px 2px black',
        '::placeholder': {
            color: 'white',
            //  fontSize: '1.5rem',
        }
    },
    inputDiv: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '80px',
    },
    submitButton: {
        width: '125px',
        height: '100px',
        margin: '0 auto'
    }
});


function mapStateToProps(state) {
    return {
        currentProductNameEditor: state.currentProductNameEditor,
    }
}
const mapDispatchToProps = {
    setProductNameForEditor
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor);