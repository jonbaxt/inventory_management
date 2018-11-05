import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Client from './ChildComponents/Client';
import NewClient from './ChildComponents/NewClient';
import { getClientsFromApi } from '../../ducks/reducer';

// const dum = require('./ChildComponents/clientDummyData');

class Clients extends React.Component {
    constructor() {
        super();
        this.state = {
            clientsArray: [],
            newClientVisible: false,  //switch back to false
        }
        this.toggleNewClient = this.toggleNewClient.bind(this);
    }

    componentDidMount() {
        if (this.props.clientsArray[0] !== 'loading') {
            this.props.getClientsFromApi();
            this.setState({ clientsArray: this.props.clientsArray })
        }
    }
    // componentDidUpdate(prevProps, prevState) {
        // if (prevProps.clientsArray[0] !== this.props.clientsArray[0]) {
            // console.log('Component Did Update did run.')
            // this.props.getClientsFromApi();
        // }
        // if (this.props.clientsArray[0] === 'loading') {
            // console.log('Component Did Update did run.')
            // this.props.getClientsFromApi();
        // }
    // }
    loadingPage = () => {
        // Minimum 2 seconds needed to load the page properly and then make the axios call after redux has connected.
        setTimeout( () => {
            if( this.props.clientsArray[0] === 'loading'){
            this.props.getClientsFromApi();
            console.log('loading function ran')
            }
        }, 2000)
    }
    toggleNewClient() { this.setState({ newClientVisible: !this.state.newClientVisible }); }
    render() {
        // let dummyMaped = dum.clientData.map(element => {
            // return <Client key={element.client_id} clientInfo={element} />
        // });
        let clientMapped = <h2 className={css(clientCSS.subNavText)} style={{ margin: 0, textAlign: 'center' }}>Loading...</h2>;
        if (this.props.clientsArray[0] !== 'loading') {
            clientMapped = this.props.clientsArray.length !== 0 ? this.props.clientsArray.map(element => {
                return <Client key={element.client_id} clientInfo={element} />
            }) : <h5 >Loading...</h5>
        }
        return (
            <div className={css(clientCSS.clientMain)}>
                {this.loadingPage()}
                <NewClient
                    newClientVisible={this.state.newClientVisible}
                    toggleNewClient={this.toggleNewClient} />
                <div className={css(clientCSS.subNavBar)}
                    onClick={() => this.toggleNewClient()}>
                    <h4 className={css(clientCSS.subNavText)} >Add New Client</h4>
                </div>
                <h1 className={css(clientCSS.h1Text)}>Clients</h1>
                Add a create new client option for the subnav here.
                Need to Edit Clients as well.
                <div className={css(clientCSS.clientsTable)} >
                    {/* {dummyMaped} */}
                    {clientMapped}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    if (state.clientsArray.length > 0) {
        return {
            clientsArray: state.clientsArray,
        }
    }
    else {
        return {
            clientsArray: ['loading'],
        }
    }
}
export default connect(mapStateToProps, { getClientsFromApi })(Clients);

const clientCSS = StyleSheet.create({
    clientMain: {
        margin: 0,
        padding: 0,
        paddingTop: '50px',
        width: '100%',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',

    },
    subNavBar: {
        position: 'fixed',
        width: '100%',
        height: '30px',
        background: 'rgb(105,105,105)',
    },
    subNavText: {
        margin: 0,
        padding: 0,
        textAlign: 'right',
        marginRight: '30px',
        marginTop: '5px',
        color: 'white',
        textShadow: '1px 1px 2px black',
        cursor: 'pointer',
    },
    clientsTable: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    h1Text: {
        margin: 0,
        padding: 0,
        paddingTop: '25px',
        color: 'white',
        textShadow: '2px 2px 4px black',
    },
});