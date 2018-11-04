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

app.get('/api/getClients', con.getClients);
app.post('/api/newClient/insert', con.postNewClient);

app.get('/api/getEmployees', con.getEmployees);

app.get('/api/getOrders', con.getOrders);


app.listen(SERVER_PORT, () => { console.log( `Port ${SERVER_PORT} is on`)});