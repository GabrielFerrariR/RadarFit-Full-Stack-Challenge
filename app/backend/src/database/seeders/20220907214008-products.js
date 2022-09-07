'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('products', [{
     produto: 'halter',
     valor: 15.8,
     descricao: 'Produto muito bom bacaninha'
     },
     {
      produto: 'aparelho',
      valor: 50,
      descricao: 'malha pernas q é uma beleza'
      }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});
  }
};
