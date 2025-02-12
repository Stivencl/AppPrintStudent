"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
//import { DataTypes } from "sequelize";
const core_1 = require("@sequelize/core");
const conexion_1 = __importDefault(require("../db/conexion"));
exports.User = conexion_1.default.define('user', {
    id: {
        type: core_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: core_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: core_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    state: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false
    }
});
