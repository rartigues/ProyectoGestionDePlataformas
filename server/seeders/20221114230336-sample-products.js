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
        nombre: 'Pastelito relleno de chocolate',
        precio: 1500,
        foto: 'https://images-gmi-pmc.edge-generalmills.com/97af9316-584b-4ede-a678-fbfc06e6451f.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        marca: 'Verluys',
        nombre: 'Pastelito de vainilla',
        precio: 1000,
        foto: 'https://doncucharon.com/fotos/recetas/86/cupcakes-de-vainilla.jpg',
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
