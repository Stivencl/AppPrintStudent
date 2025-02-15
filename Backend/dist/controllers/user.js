"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const core_1 = require("@sequelize/core");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_teacher, name, last_name, email, password, role, state } = req.body;
    const passwordHash = yield bcrypt_1.default.hash(password, 10);
    const userOne = yield user_1.User.findOne({ where: { [core_1.Op.or]: { email: email, id_teacher: id_teacher } } });
    if (userOne) {
        return res.status(400).json({
            msg: `User with email ${email} or id ${id_teacher} already exists`
        });
    }
    try {
        user_1.User.create({
            id_teacher: id_teacher,
            name: name,
            last_name: last_name,
            email: email,
            password: passwordHash,
            role: role,
            state: 1
        });
        res.status(200).json({
            msg: `User  ${name} ${last_name} create successful`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: `Error creating user with email ${email} or id ${id_teacher}`
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    res.json({
        msg: `Sesion start successful =>`,
        body: req.body
    });
});
exports.login = login;
