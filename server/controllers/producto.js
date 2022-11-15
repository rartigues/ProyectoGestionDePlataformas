const Producto = require('../models').Producto
module.exports = {

    async getAllProducts(req, res) {
        try {
            const products = await Producto.findAll({
                attributes: ["id", "marca", "nombre", "precio", "foto"],
                order: [["id", "ASC"]],
            });
            res.status(200).send(products);
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
};