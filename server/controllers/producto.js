const Producto = require('../models').Producto
module.exports = {

    // eslint-disable-next-line no-unused-vars
    async getAllProducts(req, res) {
        try {
            const products = await Producto.findAll({
                attributes: ["id", "marca", "nombre", "precio", "foto"],
                order: [["id", "ASC"]],
            });
            //res with json that starts with {data: [products]}
            res.status(200).send({ productos: products });
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message);
        }
    },
};