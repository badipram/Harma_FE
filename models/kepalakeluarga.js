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
  class KepalaKeluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KepalaKeluarga.hasMany(models.Keluarga, {
        foreignKey: 'id_kepala_keluarga',
      });

      KepalaKeluarga.belongsTo(models.Penduduk, {
        foreignKey: 'id_penduduk',
      });
    }
  }
  KepalaKeluarga.init({
    id_kepala_keluarga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    id_penduduk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Penduduks',
        key: 'id_penduduk',
      },
    },
  }, {
    sequelize,
    modelName: 'KepalaKeluarga',
  });
  return KepalaKeluarga;
};