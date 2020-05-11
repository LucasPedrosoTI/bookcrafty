"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "usuario",
      [
        {
          nome: "David",
          email: "mail@mail.com",
          senha: bcrypt.hashSync("123456", 10),
        },
        {
          nome: "Lucas",
          email: "mail2@mail.com",
          senha: bcrypt.hashSync("123456", 10),
        },
        {
          nome: "Paula",
          email: "mail3@mail.com",
          senha: bcrypt.hashSync("123456", 10),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuario", null, {});
  },
};
