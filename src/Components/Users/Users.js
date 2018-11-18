import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import UserTiles from './ChildComponents/UserTiles';
import { getUsersFromApi } from '../../ducks/reducer';
import NewUser from './ChildComponents/newUser';

class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            employeesArray: [],
            newEmployeeVisible: false,
        }
        this.toggleNewEmployeeVis = this.toggleNewEmployeeVis.bind(this);
    }

    componentDidMount() {
        if (this.props.usersArray.length === 0) {
            this.props.getUsersFromApi();
        }
    }
    toggleNewEmployeeVis() { this.setState({ newEmployeeVisible: !this.state.newEmployeeVisible }); }

    render() {
        let usersList = this.props.usersArray.length !== 0 ? this.props.usersArray.map(element => {
            return (<UserTiles key={element.employee_id} userProfile={element} />)
        }) : <h3 className={css(userCSS.h1Text, userCSS.extraTextSpace)} >No Employees Found. Please Refresh Browser.</h3>


        return (
            <div className={css(userCSS.usersMain)}>

                <div className={css(userCSS.subNav)}><h4 className={css(userCSS.subHText)}
                    onClick={() => this.toggleNewEmployeeVis()}>Add New Employee</h4></div>
                <h1 className={css(userCSS.h1Text)}>Inventory Warehouse Employees</h1>
                <section className={css(userCSS.usersTable)}>
                    {usersList}
                </section>
                
                <NewUser
                    newEmployeeVisible={this.state.newEmployeeVisible}
                    toggleNewEmployeeVis={this.toggleNewEmployeeVis} />
            </div>
        )
    }
}

const userCSS = StyleSheet.create({
    usersMain: {
        margin: 0,
        padding: 0,
        paddingTop: '80px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    subNav: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        height: '30px',
        top: '54px',
        background: 'rgb(128,128,90)',
        zIndex: '99',
        // background: 'green',
    },
    h1Text: {
        margin: 0,
        padding: 0,
        color: 'white',
        textShadow: '2px 2px 4px black',
    },
    extraTextSpace: {
        marginTop: '80px',
    },
    usersTable: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    subHText: {
        margin: 0,
        padding: 0,
        marginRight: '30px',
        textAlign: 'right',
        color: 'white',
        textShadow: '1px 1px 2px black',
        cursor: 'pointer',
        ':hover': {
            color: 'rgb(169,169,169)',
            transition: '0.5s all ease',
        },
    },
});

function mapStateToProps(state) {
    return {
        usersArray: state.usersArray
    }
}

export default connect(mapStateToProps, { getUsersFromApi })(Users);