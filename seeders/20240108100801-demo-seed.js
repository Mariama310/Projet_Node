'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      firstName:'Margaux',
      lastName:'Delafosse',
      age:24,
      email:'margaux.delaf@gmail.com',
      password:'password',
      createdAt:new Date(),
      updatedAt:new Date()
      },
      {
        firstName:'Joalie',
        lastName:'Cornélie',
        age:22,
        email:'joalie.cornelie@gmail.com',
        password:'password',
        createdAt:new Date(),
        updatedAt:new Date()
      }],{});

    const users=await queryInterface.sequelize.query('SELECT id FROM users',{type:Sequelize.QueryTypes.SELECT});
    const userIds=users.map(user => user.id);

    await queryInterface.bulkInsert('decks',[
      {
        deckName:'English',
        userId: userIds[0],
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        deckName:'Maths',
        userId: userIds[1],
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{});

    const decks=await queryInterface.sequelize.query('SELECT id FROM decks',{type:Sequelize.QueryTypes.SELECT});
    const deckIds=decks.map(deck => deck.id);

    await queryInterface.bulkInsert('cards',[
      {
        recto:'Bonjour',
        verso:'Hello',
        deckId: deckIds[0],
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        recto:'Au revoir',
        verso:'Bye',
        deckId: deckIds[0],
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        recto:'Dérivée de x²',
        verso:'2x',
        deckId: deckIds[1],
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ],{});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cards',null,{});
    await queryInterface.bulkDelete('decks', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
