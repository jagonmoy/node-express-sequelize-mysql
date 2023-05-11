import { sequelize} from ('../config/dbConfig');
import { DataTypes } from require('sequelize');
const User = sequelize.define(
  'user',
  {
    username: {
      type: DataTypes.STRING,
      noUpdate: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
   
  },
  { tableName: 'user' }
);
export {
  User
}