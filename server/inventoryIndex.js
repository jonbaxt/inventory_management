const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const session = require('express-session');
const chalk = require('chalk');
require('dotenv').config();

const dummyTestData = require('./dummyTestData');
const con = require('./controller');

const {SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then( (postgresDatabase) => {
    console.log(chalk.bgRed.white('Datbase is connected.'));
    app.set('db', postgresDatabase);
}).catch( errMessage => console.log(chalk.bgRed.yellow(`Was unable to process request. Error Message ==>> ${errMessage}`)));

app.use(express.static(`${__dirname}/../build`));
app.use( bodyParser.json() );


app.get('/testArray', (req, res) => {
    res.status(200).send(dummyTestData);
})

app.get('/api/getProducts', con.getInventory );
app.post('/api/newproduct/insert', con.postNewProduct );
app.put('/api/inventoryproducts/updatename/:id', con.updateProductName);
app.put('/api/inventoryproducts/updatepartnumber/:id', con.updateProductPartNumber);
app.put('/api/inventoryproducts/updateproductlabel/:id', con.updateProductLabel);
app.put('/api/inventoryproducts/updateproductimage/:id', con.updateProductImage);
app.put('/api/inventoryproducts/updateproductcurrentcount/:id', con.updateProductCurrentCount);
app.put('/api/inventoryproducts/updateproductminimumcount/:id', con.updateProductMinimumStock);
app.put('/api/inventoryproducts/updateproductprice/:id', con.updateProductPrice);
app.put('/api/inventoryproducts/updateproductalertwhenlow/:id', con.updateProductAlertWhenLow);


app.get('/api/getClients', con.getClients);
app.post('/api/newClient/insert', con.postNewClient);
app.put('/api/clients/updatename/:id', con.updateClientNameById);
app.put('/api/clients/updatephonenumber/:id', con.updatePhoneNumberById);
app.put('/api/clients/updateemail/:id', con.updateEmailById);
app.put('/api/clients/updatecompany/:id', con.updateCompanyById);
app.put('/api/clients/updateaddresses/:id', con.updateClientCompanyAddressesById);
app.delete('/api/delete/client/byid/:id', con.deleteClientById);

app.get('/api/getEmployees', con.getEmployees);

app.get('/api/getOrders', con.getOrders);


app.listen(SERVER_PORT, () => { console.log( `Port ${SERVER_PORT} is on`)});