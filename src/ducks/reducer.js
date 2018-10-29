import axios from 'axios';

// initial starting state
const initialState = {
    ordersArray: [],
    // ordersArray: [],
    clientsArray: [],
    usersArray: [],
    productsArray: []
}

const FULFILLED = '_FULFILLED';

const GET_PRODUCTS_FROM_API = 'GET_PRODUCTS_FROM_API';
const GET_CLIENTS_FROM_API = 'GET_CLIENTS_FROM_API';
const GET_USERS_FROM_API = 'GET_USERS_FROM_API';
const GET_ORDERS_FROM_API = 'GET_ORDERS_FROM_API';

export function getProductsFromApi() {
    let products = axios.get('/api/getProducts').then((result) => {
        return  result.data
    }).catch(err => console.log(`Didn't work ${err}`))

    return {
        type: GET_PRODUCTS_FROM_API,
        payload: products
    }
}

export function getClientsFromApi() {
    let clients = axios.get('/api/getClients').then((axiosResults) => {
        return axiosResults.data;
    }).catch((err) => console.log(err));

    return {
        type: GET_CLIENTS_FROM_API,
        payload: clients
    }
}

export function getUsersFromApi() {
    let users = axios.get('/api/getEmployees').then( (axiosResults) => {
        return axiosResults.data;
    }).catch( (err) => { console.log(err) });

    return {
        type: GET_USERS_FROM_API,
        payload: users
    }
}

export function getOrdersFromApi() {
    let orders = axios.get('/api/getOrders').then((axiosResults)=> {
        return axiosResults.data;
    }).catch(err => console.log(err));

    return {
        type: GET_ORDERS_FROM_API,
        payload: orders
    }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS_FROM_API + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case GET_CLIENTS_FROM_API + FULFILLED:  
            return Object.assign({}, state, { clientsArray: action.payload });
        case GET_USERS_FROM_API + FULFILLED:
            return Object.assign({}, state, { usersArray: action.payload });
        case GET_ORDERS_FROM_API + FULFILLED: 
            return Object.assign({}, state, { ordersArray: action.payload });
        default: 
            return state;
    }

}