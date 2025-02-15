
import { DataTypes } from '@sequelize/core';
import sequelize from "../db/conexion";

export const User = sequelize.define('user',
    {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       }, 
       id_teacher: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
       name: {
        type: DataTypes.STRING,
        allowNull: false
       },
       last_name: {
        type: DataTypes.STRING,
        allowNull: false
       },
       email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
       },
       password: {
        type: DataTypes.STRING,
        allowNull: false
       },
       role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
       },
       state: {
        type: DataTypes.INTEGER,
        allowNull: false
       }
        
       
    }

)