'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('products', [{
     produto: 'Martelo',
     valor: 15.80,
     descricao: `Reprehenderit mollit dolore elit cupidatat ullamco mollit laborum veniam veniam minim proident officia irure.  Minim adipisicing ex id tempor exercitation aliqua dolore pariatur. Elit laboris eu aliqua eiusmod pariatur ut culpa cillum eu consectetur ut in velit ipsum.

      Consectetur est officia eu aliquip. Nisi et pariatur cillum culpa quis magna voluptate do. Eu ex est sint minim est nisi mollit velit deserunt cupidatat aliqua tempor commodo. Aliquip Lorem nisi enim incididunt officia occaecat dolore fugiat nisi culpa aliqua ad aliqua. Tempor non culpa dolor quis culpa mollit. Sit enim culpa non ex nostrud tempor dolore ullamco. Enim pariatur voluptate culpa quis anim ad pariatur.`
     },
     {
      produto: 'Bigorna',
      valor: 50.99,
      descricao: `Nisi ea excepteur mollit ad. Non minim culpa reprehenderit consectetur veniam ipsum esse consectetur mollit eu. Et anim adipisicing excepteur qui aute nisi eiusmod aute qui ut quis consequat in est. Voluptate minim ad reprehenderit sunt sunt. Deserunt veniam aute laborum exercitation qui reprehenderit officia officia culpa pariatur fugiat eu duis. Proident velit excepteur deserunt Lorem proident adipisicing ea ut enim occaecat minim commodo amet officia.

      Aliqua esse excepteur amet excepteur ullamco aliquip id mollit in voluptate magna. Reprehenderit duis magna commodo minim deserunt qui amet. Sunt occaecat cupidatat fugiat occaecat adipisicing do minim excepteur culpa qui duis. Laborum amet id labore nostrud excepteur duis veniam reprehenderit dolore incididunt voluptate. Sit labore consectetur velit voluptate nostrud.`
      },
      {
        produto: 'Estribo',
        valor:150.99,
        descricao: `
        Aliqua esse excepteur amet excepteur ullamco aliquip id mollit in voluptate magna. Reprehenderit duis magna commodo minim deserunt qui amet. Sunt occaecat cupidatat fugiat occaecat adipisicing do minim excepteur culpa qui duis. Laborum amet id labore nostrud excepteur duis veniam reprehenderit dolore incididunt voluptate. Sit labore consectetur velit voluptate nostrud.`
      },
      {
        produto: 'Ferradura',
        valor:330.99,
        descricao: `
        Sint non aliquip pariatur excepteur veniam irure. Aliqua excepteur sit in dolore sint anim laborum duis. Enim consequat tempor sunt in deserunt enim reprehenderit tempor officia ipsum ex. Occaecat irure eiusmod dolore tempor est.

        Nulla qui sunt sit duis sit non labore nostrud. Nulla reprehenderit ullamco irure velit veniam sit do veniam exercitation ipsum ullamco duis. Veniam id dolor ex nostrud anim in.`
      },
      {
        produto: 'Elefante',
        valor:150.99,
        descricao: `
        Aliqua esse excepteur amet excepteur ullamco aliquip id mollit in voluptate magna. Reprehenderit duis magna commodo minim deserunt qui amet. Sunt occaecat cupidatat fugiat occaecat adipisicing do minim excepteur culpa qui duis. Laborum amet id labore nostrud excepteur duis veniam reprehenderit dolore incididunt voluptate. Sit labore consectetur velit voluptate nostrud.`
      },
      {
        produto: 'Chocolate',
        valor:1009.00,
        descricao: `
        Aliqua esse excepteur amet excepteur ullamco aliquip id mollit in voluptate magna. Reprehenderit duis magna commodo minim deserunt qui amet. Sunt occaecat cupidatat fugiat occaecat adipisicing do minim excepteur culpa qui duis. Laborum amet id labore nostrud excepteur duis veniam reprehenderit dolore incididunt voluptate. Sit labore consectetur velit voluptate nostrud.`
      }], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});
  }
};
