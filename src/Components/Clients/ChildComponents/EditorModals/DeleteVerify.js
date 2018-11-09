import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import { deleteClientById } from '../../../../ducks/reducer';

function DeleteVerify(props) {
    // console.log(props);
    // console.log(props.deleteVerifyVisible);
    return (
        <div className={ props.deleteVerifyVisible ? css(veriCSS.main) : css(veriCSS.main, veriCSS.hide) }>
            <div className={css(veriCSS.modal)}>
                <h2 className={css(veriCSS.text)}>Delete {props.currentClientViewed.first_name + ' ' + props.currentClientViewed.last_name}?</h2>
                {/* <h3 className={css(veriCSS.text)}>Confirm Delete?</h3> */}
                <h5 className={css(veriCSS.text)}>All information and orders for this client will be lost.</h5>

                <button className={css(veriCSS.delButton)}
                    onClick={()=>{
                        props.deleteClientById(props.currentClientViewed.client_id)
                        props.toggleDeleteVisible();
                        props.toggleEditVisible();
                    }}>Delete</button>

                <button className={css(veriCSS.cancelButton)}
                    onClick={()=>{ 
                        props.toggleEditVisible();
                        props.toggleDeleteVisible();
                        console.log('Clicked Cancel in Delete Verification Modal');
                    }}>Cancel</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteClientById
}
export default connect(null, mapDispatchToProps)(DeleteVerify);

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
        textShadow:'1px 1px 2px black',
        border: '2px solid white',
        boxShadow: '2px 2px 4px black',
        background: 'rgb(139,0,0)',
        cursor: 'pointer',
    
    },
    cancelButton: {
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',
        width: '80px',
        height: '40px',
        color: 'white',
        fontWeight: 'bold',
        textShadow:'1px 1px 2px black',
        border: '2px solid white',
        boxShadow: '2px 2px 4px black',
        background: '',
        cursor: 'pointer',
    }
});