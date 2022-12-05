const Compra = require('../models').Compra;
const LineaCompra = require('../models').LineaCompra;
// const Producto = require('../models').Producto;
// const User = require('../models').User;

module.exports = {
    create(req, res) {
        return Compra
            .create({
                userId: req.body.userId,
                fecha: req.body.fecha,
                total: req.body.total
            })
            .then(compra => {
                // console.log(compra.id);
                console.log(req.body.lineasCompra);
                // console.log(req.body.lineasCompra.length);
                for (let i = 0; i < req.body.lineasCompra.length; i++) {
                    LineaCompra.create({
                        compraId: compra.id,
                        productoId: req.body.lineasCompra[i].productoId,
                        cantidad: req.body.lineasCompra[i].cantidad,
                        total: req.body.lineasCompra[i].total
                    // eslint-disable-next-line no-unused-vars
                    }).then(lineaCompra => {
                        // console.log(lineaCompra);
                        //todo  Update stock
                        // Producto.findByPk(req.body.lineasCompra[i].productoId).then(producto => {
                        //     console.log(producto);
                        //     producto.update({
                        //         stock: producto.stock - req.body.lineasCompra[i].cantidad
                        //     }).then(producto => {
                        //         console.log(producto);
                        //     }).catch(error => {
                        //         console.log(error);
                        //     });
                        // }).catch(error => {
                        //     console.log(error);
                        // });
                    }).catch(error => {
                        console.log(error);
                    });

                }
                return res.status(201).send(compra);
                
            })
            .catch(error => res.status(400).send(error));

    },
};