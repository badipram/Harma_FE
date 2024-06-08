/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KepalaKeluargas', {
      id_kepala_keluarga: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      id_penduduk: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Penduduks',
          key: 'id_penduduk',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('KepalaKeluargas');
  },
};