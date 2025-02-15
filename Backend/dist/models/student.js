"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const core_1 = require("@sequelize/core");
const conexion_1 = __importDefault(require("../db/conexion"));
exports.Student = conexion_1.default.define('student', {
    id: {
        type: core_1.DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
    },
    name: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    id_guardian: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    eps: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    rh: {
        type: core_1.DataTypes.STRING,
        allowNull: false,
    },
    birthdate: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    inf_acad: {
        type: core_1.DataTypes.STRING,
        allowNull: false
    },
    inf_medical: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false
    },
    inf_vuln: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false
    },
    code_dane: {
        type: core_1.DataTypes.INTEGER,
        allowNull: false
    },
    piar: {
        type: core_1.DataTypes.BOOLEAN,
        allowNull: false
    }
});
