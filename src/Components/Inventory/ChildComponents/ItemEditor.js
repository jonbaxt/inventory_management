import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class ItemEditor extends React.Component {
    constructor() {
        super();
        this.state = {
            nameChangeActive: false,
            labelChangeActive: false,
            currentInventoryActive: false,
            minimumProductActive: false,
            priceActive: false,
            imageActive: false,

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
            minimumProduct: '',
            priceOfProduct: '',
            imageOfProduct: '',
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
    toggleCurrentCount = () => { this.setState({ currentInventoryActive: !this.state.currentInventoryActive }); }
    toggleMinimimumProduct = () => { this.setState({ minimumProductActive: !this.state.minimumProductActive }); }
    togglePrice = () => { this.setState({ priceActive: !this.state.priceActive }); }
    toggleImage = () => { this.setState({ imageActive: !this.state.imageActive }); }
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
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                productName = this.state.nameTextBox;
                this.toggleNameChange();
            }} >Change</button></div>
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                this.handleNameEdit('');
                this.toggleNameChange()
            }}>Cancel</button></div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Name: <span className={css(editorCSS.originalText)}>{productName}</span></h3>
                <div><button className={css(editorCSS.editButton)} onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleNameChange()
                }}>Edit</button></div>
            </div>

        let labelChange = this.state.labelChangeActive ? <div className={css(editorCSS.inputDiv)}>
            <h3 className={css(editorCSS.h3Form)}>Label / Description:</h3>
            <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder={label}
                value={this.state.labelTextBox}
                onChange={(e) => this.handleLabelEdit(e.target.value)} />
            <div ><button className={css(editorCSS.editButton)} onClick={() => {
                // productName = this.state.nameTextBox;
                this.toggleLabelChange();
            }} >Change</button></div>
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                this.handleLabelEdit('');
                // this.handleNameEdit('');
                this.toggleLabelChange()
            }}>Cancel</button></div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Label / Description:  <span className={css(editorCSS.originalText)}>{label}</span></h3>
                <div><button className={css(editorCSS.editButton)} onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleLabelChange()
                }}>Edit</button></div>
            </div>

        let currentInventoryCount = this.state.currentInventoryActive ? <div className={css(editorCSS.inputDiv)}>
            <h3 className={css(editorCSS.h3Form)}>Current Inventory Count:</h3>
            <input className={css(editorCSS.inputBoxNumber)} type='number' placeholder={productCount}
                value={this.state.currentCountTextBox}
                onChange={(e) => this.handleCurrentCountEdit(e.target.value)} />
            <div ><button className={css(editorCSS.editButton)} onClick={() => {
                // productName = this.state.nameTextBox;
                this.toggleCurrentCount();
            }} >Change</button></div>
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                this.handleCurrentCountEdit('');
                this.toggleCurrentCount()
            }}>Cancel</button></div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Current Inventory Count:<span className={css(editorCSS.originalText)}>{productCount}</span></h3>
                <div><button className={css(editorCSS.editButton)} onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleCurrentCount()
                }}>Edit</button></div>
            </div>

        let minimumInventoryCount = this.state.minimumProductActive ? <div className={css(editorCSS.inputDiv)}>
            <h3 className={css(editorCSS.h3Form)}>Minimum Product Required on Hand:</h3>
            <input className={css(editorCSS.inputBoxNumber)} type='number' placeholder={minimumProductRequired}
                value={this.state.minimumCountTextBox}
                onChange={(e) => this.handleMinimumCountEdit(e.target.value)} />
            <div ><button className={css(editorCSS.editButton)} onClick={() => {
                // productName = this.state.nameTextBox;
                this.toggleMinimimumProduct();
            }} >Change</button></div>
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                this.handleMinimumCountEdit('');
                this.toggleMinimimumProduct();
            }}>Cancel</button></div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Minimum Product Required on Hand:<span className={css(editorCSS.originalText)}>{minimumProductRequired}</span></h3>
                <div><button className={css(editorCSS.editButton)} onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleMinimimumProduct();
                }}>Edit</button></div>
            </div>

        let priceOfItemChanger = this.state.priceActive ? <div className={css(editorCSS.inputDiv)}>
            <h3 className={css(editorCSS.h3Form)}>Price:</h3>
            <input className={css(editorCSS.inputBoxNumber)} type='number' placeholder={itemPrice}
                value={this.state.priceTextBox}
                onChange={(e) => this.handlePriceEdit(e.target.value)} />
            <div ><button className={css(editorCSS.editButton)} onClick={() => {
                // productName = this.state.nameTextBox;
                this.togglePrice();
            }} >Change</button></div>
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                this.handlePriceEdit('');
                this.togglePrice();
            }}>Cancel</button></div>
        </div>
            : <div className={css(editorCSS.inputDiv)}>
                <h3 className={css(editorCSS.h3Form)}>Price:<span className={css(editorCSS.originalText)}>{itemPrice}</span></h3>
                <div><button className={css(editorCSS.editButton)} onClick={() => {
                    // this.handleNameEdit(productName)
                    this.togglePrice();
                }}>Edit</button></div>
            </div>

        let imageOfItemChanger = this.state.imageActive ? <div >
            <h3 className={css(editorCSS.h3Form)}>Product Image:</h3>
            <input className={css(editorCSS.inputBoxStyled)} type='text' placeholder={image}
                value={this.state.imageTextBox}
                onChange={(e) => this.handleImageEdit(e.target.value)} />
            <img src={image} alt='' className={css(editorCSS.pictureSize)} />
            <div ><button className={css(editorCSS.editButton)} onClick={() => {
                // productName = this.state.nameTextBox;
                this.toggleImage();
            }} >Change</button></div>
            <div><button className={css(editorCSS.editButton)} onClick={() => {
                this.handleImageEdit('');
                this.toggleImage();
            }}>Cancel</button></div>
        </div> :
            <div >
                <h3 className={css(editorCSS.h3Form)}>Product Image: Current Image</h3>
                <img src={image} alt='' className={css(editorCSS.pictureSize)} />
                <div><button className={css(editorCSS.editButton)} onClick={() => {
                    // this.handleNameEdit(productName)
                    this.toggleImage();
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

                    {currentInventoryCount}
                    <br />

                    {minimumInventoryCount}
                    <br />

                    {priceOfItemChanger}
                    <br />

                    {imageOfItemChanger}
                    <br />
                    <br />

                    <div>
                        <button className={css(editorCSS.submitButton)} >Save Changes</button>
                    </div>
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
    inputBoxNumber: {
        width: '10%',
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
    editButton: {
        width: '80px',
        height: '20px',
        margin: 0,
        padding: 0,

        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            // transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    },
    submitButton: {
        width: '125px',
        height: '20px',
        margin: '0 auto',
        background: 'rgb(47,79,79)',
        border: '2px solid white',
        borderRadius: '10px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        fontWeight: 'bold',
        boxShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            // transition: '0.5s all ease',
            color: 'rgb(47,79,79)',
            background: 'white',
            border: '2px solid rgb(47,79,79)',
        },
    },
    buttonSubmit: {
        margin: 0,
        width: '100px',
        marginLeft: '5px',
        marginRight: '5px',
        height: '35px',
        background: 'rgb(255,255,255)',
        boxShadow: '2px 2px 4px rgb(0,0,0)',
        border: 'none',
        marginTop: '10px',
        marginBottom: '15px',
        cursor: 'pointer',
    },
});


// function mapStateToProps(state) {
    // return {
        // currentProductNameEditor: state.currentProductNameEditor,
    // }
// }
// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ItemEditor);
export default connect(null, null)(ItemEditor);