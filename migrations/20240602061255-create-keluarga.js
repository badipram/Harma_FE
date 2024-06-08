/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Keluargas', {
      id_keluarga: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      id_kepala_keluarga: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'KepalaKeluargas',
          key: 'id_kepala_keluarga',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_anggota_keluarga: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Penduduks',
          key: 'id_penduduk',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      hubungan: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Keluargas');
  },
};