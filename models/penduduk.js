/* eslint-disable eol-last */
/* eslint-disable import/newline-after-import */
/* eslint-disable comma-dangle */
/* eslint-disable strict */
/* eslint-disable lines-around-directive */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penduduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Penduduk.hasOne(models.KepalaKeluarga, {
        foreignKey: 'id_penduduk'
      });

      Penduduk.hasOne(models.Keluarga, {
        foreignKey: 'id_anggota_keluarga'
      });
    }
  }
  Penduduk.init({
    id_penduduk: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jenis_kelamin: {
      type: DataTypes.ENUM('L', 'P'),
      allowNull: false,
      defaultValue: 'L'
    }
  }, {
    sequelize,
    modelName: 'Penduduk',
  });
  return Penduduk;
};