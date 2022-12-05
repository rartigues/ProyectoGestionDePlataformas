'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class LineaCompra extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // one linea de compra can have one producto and one compra
            LineaCompra.belongsTo(models.Producto, {
                foreignKey: 'productoId',
                as: 'Producto'
            });
            LineaCompra.belongsTo(models.Compra, {
                foreignKey: 'compraId',
                as: 'Compra'
            });
        }
    }
    LineaCompra.init({
        compraId: DataTypes.INTEGER,
        productoId: DataTypes.INTEGER,
        cantidad: DataTypes.INTEGER,
        total: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'LineaCompra',
    });
    return LineaCompra;
};