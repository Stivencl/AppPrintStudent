import { DataTypes } from '@sequelize/core';
import sequelize from "../db/conexion";

export const Student = sequelize.define('student',
    {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        
       }, 
       name: {
        type: DataTypes.STRING,
        allowNull: false
       },
       last_name: {
        type: DataTypes.STRING,
        allowNull: false
       },
       id_guardian: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
       },
       eps: {
        type: DataTypes.STRING,
        allowNull: false
       },
       rh: {
        type: DataTypes.STRING,
        allowNull: false,
        
       },
       birthdate: {
        type: DataTypes.STRING,
        allowNull: false
       },
       inf_acad: {
        type: DataTypes.STRING,
        allowNull: false
       },
       inf_medical: {
        type: DataTypes.INTEGER,
        allowNull: false
       },
       inf_vuln: {
        type: DataTypes.INTEGER,
        allowNull: false
       },
       code_dane: {
        type: DataTypes.INTEGER,
        allowNull: false
       },
       piar: {
        type: DataTypes.BOOLEAN,
        allowNull: false
       }
       
    }

)