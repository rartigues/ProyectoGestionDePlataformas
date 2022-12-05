'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Compra extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // one compra can have many lineas de compra
            Compra.hasMany(models.LineaCompra, {
                foreignKey: 'compraId',
                as: 'LineaCompra'
            });
            // one user can have many compras
            Compra.belongsTo(models.User, {
                foreignKey: 'userId',
                as: 'User'
            });
        }
    }
    Compra.init({
        userId: DataTypes.INTEGER,
        fecha: DataTypes.DATE,
        total: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Compra',
    });
    return Compra;
};