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
    updateProductName: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const product_name = req.body.product_name;

        dbInstance.update_inventory_product_name([inventory_id, product_name]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductPartNumber: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const part_number = req.body.part_number;

        dbInstance.update_inventory_product_part_number([inventory_id, part_number]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductLabel: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const product_label = req.body.product_label;

        dbInstance.update_inventory_product_label([inventory_id, product_label]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductImage: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const product_image = req.body.product_image;

        dbInstance.update_inventory_product_image([inventory_id, product_image]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductCurrentCount: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const current_count = req.body.current_count;

        dbInstance.update_inventory_current_count([inventory_id, current_count]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductMinimumStock: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const minimum_stock = req.body.minimum_stock;

        dbInstance.update_inventory_minimum_stock([inventory_id, minimum_stock]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductPrice: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const price = req.body.price;

        dbInstance.update_inventory_price([inventory_id, price]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    updateProductAlertWhenLow: (req, res) => {
        const dbInstance = req.app.get('db');
        const inventory_id = req.params.id;
        const alert_when_low = req.body.alert_when_low;

        dbInstance.update_inventory_alert_when_low([inventory_id, alert_when_low]).then( (updatedTable) => { res.status(200).send(updatedTable); }).catch( (err) => { res.status(400).send(err); });
    },
    deleteProductById: (req, res) => {
        const dbInstance = req.app.get('db');
        const idNum = Number(req.params.id);

        dbInstance.delete_inventory_product([idNum]).then( alteredTable => { res.status(200).send(alteredTable); }).catch( err =>{ res.status(400).send(err);});
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
    updatePhoneNumberById: (req, res) => {
        const dbInstance = req.app.get('db');
        const client_id = Number(req.params.id);
        const phone_number = req.body.phone_number;

        dbInstance.update_client_phone_number([client_id, phone_number]).then( (updatedNumberInTable)=> {
            res.status(200).send(updatedNumberInTable);
        }).catch(err => console.log(err));
    },
    updateEmailById: (req, res) => {
        const dbInstance = req.app.get('db');
        const client_id = Number(req.params.id);
        const email = req.body.email;

        dbInstance.update_client_email([client_id, email]).then( (updatedEmailInTable)=> {
            res.status(200).send(updatedEmailInTable);
        }).catch(err => console.log(err));
    },
    updateCompanyById: (req, res) => {
        const dbInstance = req.app.get('db');
        const client_id = Number(req.params.id);
        const company = req.body.company;

        dbInstance.update_client_company([client_id, company]).then( (updatedCompanyInTable)=> {
            res.status(200).send(updatedCompanyInTable);
        }).catch(err => console.log(err));
    },
    updateClientCompanyAddressesById: (req, res) => {
        const dbInstance = req.app.get('db');
        const client_id = Number(req.params.id);
        const { company_address_line_1, company_address_line_2, mailing_address_line_1, mailing_address_line_2 } = req.body;

        dbInstance.update_client_addresses([client_id, company_address_line_1, company_address_line_2, mailing_address_line_1, mailing_address_line_2]).then( (newTableData )=>{ res.status(200).send(newTableData) }).catch( (err) =>{ res.status(400).send(err) });
    },
    deleteClientById: (req, res) => {
        const dbInstance = req.app.get('db');
        const idNum = Number(req.params.id);

        dbInstance.delete_client_by_id([idNum]).then( alteredTable => { res.status(200).send(alteredTable); }).catch( err =>{ res.status(400).send(err);});
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