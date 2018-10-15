import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function UserTiles(props) {
    console.log(props.userProfile);
    let first = props.userProfile.first_name;
    let last = props.userProfile.last_name;
    let idPic = props.userProfile.id_pic;
    let phone = props.userProfile.phone_number;
    let email = props.userProfile.email;
    let address1 = props.userProfile.address_line_1;
    let address2 = props.userProfile.address_line_2;
    let role = props.userProfile.employee_role;
    return (
        <div className={css(userCSS.userTileMain)}>
            <h3 className={css(userCSS.h3Format)}>{`${first} ${last}`}</h3>
            <div className={css(userCSS.idPicBox)} >
                <img className={css(userCSS.idPicSizing)} src={idPic} alt='' /></div>
            <h5 className={css(userCSS.h3Format)}>{`Phone: ${phone}`}</h5>
            <h5 className={css(userCSS.h3Format)}>{`Email: ${email}`}</h5>
            <h5 className={css(userCSS.h3Format, userCSS.underline)}>Address</h5>
            <h5 className={css(userCSS.h3Format)}>{address1}</h5>
            <h5 className={css(userCSS.h3Format)}>{address2}</h5>
            <h5 className={css(userCSS.h3Format)}>{`Position: ${role}`}</h5>

        </div>
    )
}

export default UserTiles;

const userCSS = StyleSheet.create({
    userTileMain: {
        width: '220px',
        height: '300px',
        background: 'rgba(119,136,153,1)',
        boxShadow: '2px 2px 4px black',
        margin: '10px',
    },
    h3Format: {
        color: 'white',
        textShadow: '2px 2px 4px black',
        margin: 0,
        padding: 0,
        marginTop: '2px',
    },
    idPicBox: {
        width: '80%',
        height: '100px',
        // border: '3px solid green',
        overflow: 'hidden',
        margin: '0 auto',
    },
    idPicSizing: {
        width: '60%',
        // overflow: 'hidden',
    },
    underline: {
        textDecorationLine: 'underline'
    }
});
/*
{
    employee_id: 1,
    first_name: "Dave",
    last_name: "Thomas",
    id_pic: "https://amp.businessinsider.com/images/51ca1b176bb3f76b0e000004-750-563.jpg",
    phone_number: "801-888-2541",
    email: "dave@wendys.com",
    address_line_1: "123 E Wendys Lane",
    address_line_2: "Provo, UT 84601",
    employee_role: "Shelf Stocker"
}
*/
