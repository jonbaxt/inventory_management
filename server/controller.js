const chalk = require('chalk');

module.exports = {
    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory().then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.log('Unable to process', chalk.bgRed.white(err));
            res.status(400).send(err)
        });
    },
    postNewProduct: (req, res) => {
        const dbInstance = req.app.get('db');
        const { product_name, part_number, product_label, product_image, current_count, minimum_stock, price, alert_when_low } = req.body;
        // console.log(chalk.bgBlue.green(req.body.product_name));
        
        dbInstance.new_product([product_name, part_number, product_label, product_image, current_count, minimum_stock, price, alert_when_low]).then((result) => {
            // console.log(chalk.bgGreen.white('Successfully Submitted to Database'))
            res.status(200).send(result)
        }).catch((err) => {
            // console.log('Unable to process', chalk.bgRed.white(err));
            res.status(400).send(err)
        });
    },
    getEmployees: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_employees().then((tableData) => {
            res.status(200).send(tableData)
        }).catch((err) => {
            console.log('Unable to process', chalk.bgRed.white(err));
            res.status(400).send(err)
        });
    },
    // postNewEmployee: (req, res) => {

    // },
    getClients: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_clients().then((tableData) => {
            res.status(200).send(tableData)
        }).catch((err) => {
            console.log('Unable to process', chalk.bgRed.white(err));
            res.status(400).send(err)
        });
    },
    // postNewClients: (req, res) => {

    // },
    getOrders: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_orders().then((tableData) => {
            res.status(200).send(tableData)
        }).catch((err) => {
            console.log('Unable to process', chalk.bgRed.white(err));
            res.status(400).send(err)
        });
    },
    // postNewOrder: (req, res) => {

    // },
};