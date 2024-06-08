/* eslint-disable lines-around-directive */
/* eslint-disable strict */
/* eslint-disable comma-dangle */
/* eslint-disable import/newline-after-import */
/* eslint-disable eol-last */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Keluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Keluarga.belongsTo(models.Penduduk, {
        foreignKey: 'id_anggota_keluarga',
      });

      Keluarga.belongsTo(models.KepalaKeluarga, {
        foreignKey: 'id_kepala_keluarga',
      });
    }
  }
  Keluarga.init({
    id_keluarga: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
    },
    id_kepala_keluarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'KepalaKeluargas',
        key: 'id_kepala_keluarga',
      },
    },
    id_anggota_keluarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Penduduks',
        key: 'id_penduduk',
      },
    },
    hubungan: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Keluarga',
  });
  return Keluarga;
};