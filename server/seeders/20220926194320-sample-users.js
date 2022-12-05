'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "User",
      [
        {
          correo: 'robertoartigues@hotmail.com',
          password: '123456',
          nombre: 'Roberto',
          apellido: 'Artigues',
          telefono: '+56975188700',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          correo: 'erickejemploowo@gmail.com',
          password: '123456',
          nombre: 'Erick',
          apellido: 'Saldivar',
          telefono: '+56912345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
