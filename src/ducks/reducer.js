import axios from 'axios';

// initial starting state
const initialState = {
    ordersArray: [],
    clientsArray: [],
    usersArray: [],
    productsArray: [],
}

const FULFILLED = '_FULFILLED';

const GET_PRODUCTS_FROM_API = 'GET_PRODUCTS_FROM_API';
const UPDATE_PRODUCT_NAME = 'UPDATE_PRODUCT_NAME';
const UPDATE_PRODUCT_PART_NUMBER = 'UPDATE_PRODUCT_PART_NUMBER';
const UPDATE_PRODUCT_LABEL = 'UPDATE_PRODUCT_LABEL';
const UPDATE_PRODUCT_IMAGE = 'UPDATE_PRODUCT_IMAGE';
const UPDATE_PRODUCT_CURRENT_COUNT = 'UPDATE_PRODUCT_CURRENT_COUNT';
const UPDATE_PRODUCT_MINIMUM_STOCK = 'UPDATE_PRODUCT_MINIMUM_STOCK';
const UPDATE_PRODUCT_PRICE = 'UPDATE_PRODUCT_PRICE';
const UPDATE_PRODUCT_ALERT_WHEN_LOW = 'UPDATE_PRODUCT_ALERT_WHEN_LOW';

const GET_USERS_FROM_API = 'GET_USERS_FROM_API';
const GET_ORDERS_FROM_API = 'GET_ORDERS_FROM_API';

const GET_CLIENTS_FROM_API = 'GET_CLIENTS_FROM_API';
const POST_NEW_CLIENT = 'POST_NEW_CLIENT';
const UPDATE_CLIENT_NAME_BY_ID = 'UPDATE_CLIENT_NAME_BY_ID';
const UPDATE_PHONE_NUMBER_BY_ID = 'UPDATE_CLIENT_PHONE_NUMBER_BY_ID';
const UPDATE_CLIENT_EMAIL_BY_ID = 'UPDATE_CLIENT_EMAIL_BY_ID';
const UPDATE_CLIENT_COMPANY_BY_ID = 'UPDATE_CLIENT_COMPANY_BY_ID';
const UPDATE_CLIENT_ADDRESSES_BY_ID = 'UPDATE_CLIENT_ADDRESSES_BY_ID';
const DELETE_CLIENT_BY_ID = 'DELETE_CLIENT_BY_ID';

export function getProductsFromApi() {
    let products = axios.get('/api/getProducts').then((result) => {
        return result.data
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

export function postNewClient(clientObject) {
    let newClientsList = axios.post('/api/newClient/insert', clientObject).then((axiosResults) => {
        return axiosResults.data;
    }).catch((err) => console.log(err));

    return {
        type: POST_NEW_CLIENT,
        payload: newClientsList
    }
}

export function updateClientNameById(clientId, firstName, lastName) {
    const newName = {
        first_name: firstName,
        last_name: lastName
    }
    let updatedClientTable = axios.put(`/api/clients/updatename/${clientId}`, newName).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_CLIENT_NAME_BY_ID,
        payload: updatedClientTable
    }
}

export function updateClientPhoneById(clientId, phoneNumber) {
    const phone = {
        phone_number: phoneNumber
    }

    let updatedClientTable = axios.put(`/api/clients/updatephonenumber/${clientId}`, phone).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PHONE_NUMBER_BY_ID,
        payload: updatedClientTable
    }
}

export function updateClientEmailById(clientId, emailAddress) {
    const emailClient = {
        email: emailAddress
    }

    let updatedClientTable = axios.put(`/api/clients/updateemail/${clientId}`, emailClient).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_CLIENT_EMAIL_BY_ID,
        payload: updatedClientTable
    }
}

export function updateClientCompanyById(clientId, companyName) {
    const companyN = {
        company: companyName
    }

    let updatedClientTable = axios.put(`/api/clients/updatecompany/${clientId}`, companyN).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_CLIENT_COMPANY_BY_ID,
        payload: updatedClientTable
    }
}

export function updateClientAddressesById(clientId, addressesObject) {
    let updatedClientTable = axios.put(`/api/clients/updateaddresses/${clientId}`, addressesObject).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_CLIENT_ADDRESSES_BY_ID,
        payload: updatedClientTable
    }
}

export function updateProductName(productId, productName) {
    const prodObj = {
        product_name: productName,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updatename/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_NAME,
        payload: updatedProductTable
    }
}

export function updateProductPartNumber(productId, partNumber) {
    const prodObj = {
        part_number: partNumber,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updatepartnumber/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_PART_NUMBER,
        payload: updatedProductTable
    }
}

export function updateProductLabel(productId, productLabel) {
    const prodObj = {
        product_label: productLabel,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updateproductlabel/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_LABEL,
        payload: updatedProductTable
    }
}

export function updateProductImage(productId, productImage) {
    const prodObj = {
        product_image: productImage,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updateproductimage/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_IMAGE,
        payload: updatedProductTable
    }
}

export function updateProductCurrentCount(productId, currentCount) {
    const prodObj = {
        current_count: currentCount,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updateproductcurrentcount/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_CURRENT_COUNT,
        payload: updatedProductTable
    }
}

export function updateProductMinimumStock(productId, minimumStock) {
    const prodObj = {
        minimum_stock: minimumStock,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updateproductminimumcount/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_MINIMUM_STOCK,
        payload: updatedProductTable
    }
}

export function updateProductPrice(productId, productPrice) {
    const prodObj = {
        price: productPrice,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updateproductprice/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_PRICE,
        payload: updatedProductTable
    }
}

export function updateProductAlertWhenLow(productId, alertWhenLow) {
    const prodObj = {
        alert_when_low: alertWhenLow,
    }
    let updatedProductTable = axios.put(`/api/inventoryproducts/updateproductalertwhenlow/${productId}`, prodObj).then((axiosResults) => { return axiosResults.data; }).catch((err) => console.log(err));

    return {
        type: UPDATE_PRODUCT_ALERT_WHEN_LOW,
        payload: updatedProductTable
    }
}

export function deleteClientById(clientId) {
    let newClientArray = axios.delete(`/api/delete/client/byid/${clientId}`).then((axiosResults) => { return axiosResults.data }).catch((err) => console.log(err));

    return {
        type: DELETE_CLIENT_BY_ID,
        payload: newClientArray
    }
}

export function getUsersFromApi() {
    let users = axios.get('/api/getEmployees').then((axiosResults) => {
        return axiosResults.data;
    }).catch((err) => { console.log(err) });

    return {
        type: GET_USERS_FROM_API,
        payload: users
    }
}

export function getOrdersFromApi() {
    let orders = axios.get('/api/getOrders').then((axiosResults) => {
        return axiosResults.data;
    }).catch(err => console.log(err));

    return {
        type: GET_ORDERS_FROM_API,
        payload: orders
    }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_FROM_API + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });

        case UPDATE_PRODUCT_NAME + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_PART_NUMBER + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_LABEL + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_IMAGE + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_CURRENT_COUNT + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_MINIMUM_STOCK + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_PRICE + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });
        case UPDATE_PRODUCT_ALERT_WHEN_LOW + FULFILLED:
            return Object.assign({}, state, { productsArray: action.payload });


        case GET_USERS_FROM_API + FULFILLED:
            return Object.assign({}, state, { usersArray: action.payload });
        case GET_ORDERS_FROM_API + FULFILLED:
            return Object.assign({}, state, { ordersArray: action.payload });

        case GET_CLIENTS_FROM_API + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case POST_NEW_CLIENT + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case UPDATE_CLIENT_NAME_BY_ID + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case UPDATE_PHONE_NUMBER_BY_ID + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case UPDATE_CLIENT_EMAIL_BY_ID + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case UPDATE_CLIENT_COMPANY_BY_ID + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case UPDATE_CLIENT_ADDRESSES_BY_ID + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        case DELETE_CLIENT_BY_ID + FULFILLED:
            return Object.assign({}, state, { clientsArray: action.payload });
        default:
            return state;
    }

}