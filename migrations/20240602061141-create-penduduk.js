/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Penduduks', {
      id_penduduk: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_lahir: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      jenis_kelamin: {
        type: Sequelize.ENUM('L', 'P'),
        allowNull: false,
        defaultValue: 'L',
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
    await queryInterface.dropTable('Penduduks');
  },
};