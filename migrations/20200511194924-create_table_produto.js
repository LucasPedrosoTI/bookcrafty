"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("produto", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
      },
      preco: Sequelize.DECIMAL(10, 2),
      imagem: Sequelize.STRING,
      fk_categoria: {
        type: Sequelize.INTEGER,
        references: { model: "categoria", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      fk_editora: {
        type: Sequelize.INTEGER,
        references: { model: "editora", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produto");
  },
};
