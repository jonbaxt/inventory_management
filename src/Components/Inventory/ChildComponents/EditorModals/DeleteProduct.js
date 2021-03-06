import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { deleteProductById } from '../../../../ducks/reducer';

function DeleteProduct(props) {
    // deleteProductView={this.state.deleteProductView}
    // toggleItemEditor={this.props.toggleItemEditor}
    // toggleDeleteProductChange={this.toggleDeleteProductChange}
    // currentInventoryItem={this.props.currentInventoryItem}
    // productName={productName}
    return (
        <div className={props.deleteProductView ? css(veriCSS.main) : css(veriCSS.main, veriCSS.hide)}>
            <div className={css(veriCSS.modal)}>
                <h2 className={css(veriCSS.text)}>Delete {props.productName}?</h2>
                {/* <h3 className={css(veriCSS.text)}>Confirm Delete?</h3> */}
                <h5 className={css(veriCSS.text)}>All information for this product will be lost.</h5>

                <button className={css(veriCSS.delButton)}
                    onClick={() => {
                        props.deleteProductById(props.currentInventoryItem);
                        props.retrieveCurrentProductNumber(-1);
                        props.toggleDeleteProductChange();
                        // props.toggleItemEditor();
                    }}>Delete</button>

                <button className={css(veriCSS.cancelButton)}
                    onClick={() => {
                        props.toggleDeleteProductChange();
                        props.toggleItemEditor();
                        // console.log('Clicked Cancel in Delete Verification Modal');
                    }}>Cancel</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteProductById
}
export default connect(null, mapDispatchToProps)(DeleteProduct);

const veriCSS = StyleSheet.create({
    main: {
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        // background: 'rgba(112,128,144, 0.8)',
        background: 'rgba(220,20,60, 0.2)',
        visibility: 'visible',
        // marginTop: '-49px',
        zIndex: '102',
    },
    modal: {
        marginTop: '320px',
        paddingTop: '10px',
        paddingLeft: '5px',
        paddingRight: '5px',
        width: '280px',
        height: '180px',
        background: 'rgb(255,99,71)',
        // boxShadow: '2px 2px 4px white',
        boxShadow: '2px 2px 4px red',
    },
    hide: {
        visibility: 'hide',
        display: 'none',
    },
    text: {
        color: 'white',
        textShadow: '1px 1px 2px black',
        margin: 0,
        padding: 0,
    },
    delButton: {
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
        background: 'rgb(139,0,0)',
        cursor: 'pointer',
        ':hover': {
            background: 'rgb(139,0,0)',
            color: 'rgb(200,0,0)',
            border: '2px solid rgb(200,0,0)',
        },

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
    }
});