/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Producto', [
      {
        marca: 'Verluys',
        nombre: 'Pastelito relleno de Chocolate',
        precio: 1500,
        foto: 'https://images-gmi-pmc.edge-generalmills.com/97af9316-584b-4ede-a678-fbfc06e6451f.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Verluys',
        nombre: 'Pastelito de Vainilla',
        precio: 1000,
        foto: 'https://doncucharon.com/fotos/recetas/86/cupcakes-de-vainilla.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Verluys',
        nombre: 'Pastelito de Frutilla',
        precio: 1250,
        foto: 'https://unareceta.com/wp-content/uploads/2014/05/receta-de-cupcakes-de-fresa.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Verluys',
        nombre: 'Pastelito de Zanahoria',
        precio: 1150,
        foto: 'https://www.recetasderechupete.com/wp-content/uploads/2019/09/Muffins-de-zanahoria.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Verluys',
        nombre: 'Pastelitos Marmoleados',
        precio: 1500,
        foto: 'https://m1.paperblog.com/i/304/3047632/cupcakes-marmoleados-L-BSeJlo.jpeg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ] , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Producto', null, {});
  }
};
