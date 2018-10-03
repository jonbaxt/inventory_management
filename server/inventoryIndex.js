const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const session = require('express-session');
const chalk = require('chalk');
require('dotenv').config();

const {SERVER_PORT, CONNECTION_STRING } = process.env;

const app = express();

massive(CONNECTION_STRING).then( (postgresDatabase) => {
    console.log(chalk.bgRed.white('Datbase is connected.'));
    app.set('db', postgresDatabase);
});

app.use(express.static(`${__dirname}/../build`));
app.use( bodyParser.json() );


app.listen(SERVER_PORT, () => { console.log( `Port ${SERVER_PORT} is on`)});