module.exports = {
    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory().then( (result) => {
            res.status(200).send(result)
        }).catch( (error) => console.log(error))
    },
};