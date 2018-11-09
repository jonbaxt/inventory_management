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
    postNewClient: (req, res) => {
        const dbInstance = req.app.get('db');
        
        const { first_name, last_name, phone_number, email, company, company_address_line_1, company_address_line_2, mailing_address_line_1, mailing_address_line_2 } = req.body;
        // console.log(chalk.bgBlue.green(req.body.first_name));
        
        dbInstance.new_client([first_name, last_name, phone_number, email, company, company_address_line_1, company_address_line_2, mailing_address_line_1, mailing_address_line_2]).then((result) => {
            // console.log(chalk.bgGreen.white('Successfully Submitted to Database'))
            res.status(200).send(result)
        }).catch((err) => {
            // console.log('Unable to process', chalk.bgRed.white(err));
            res.status(400).send(err)
        });
    },
    updateClientNameById: (req, res) => {
        const dbInstance = req.app.get('db');
        const client_id = Number(req.params.id);
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;

        dbInstance.update_client_name([client_id, first_name, last_name]).then( (updatedNameInTable) => {
            res.status(200).send(updatedNameInTable);
        }).catch(err => res.status(400).send( err));
    },
    deleteClientById: (req, res) => {
        const dbInstance = req.app.get('db');

        const idNum = Number(req.params.id);

        dbInstance.delete_client_by_id([idNum]).then( alteredTable => { res.status(200).send(alteredTable); }).catch( err =>{ res.status(400).send(err);})
    },
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