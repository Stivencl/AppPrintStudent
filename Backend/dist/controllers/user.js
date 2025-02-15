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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_teacher, name, last_name, email, password, role, state } = req.body;
    const userUnique = yield user_1.User.findOne({ where: { [core_1.Op.or]: { email: email, id_teacher: id_teacher } } });
    if (userUnique) {
        return res.status(400).json({
            msg: `User with email ${email} or id ${id_teacher} already exists`
        });
    }
    const passwordHash = yield bcrypt_1.default.hash(password, 10);
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
    const { email, password } = req.body;
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (!user) {
        return res.status(400).json({
            msg: `User with email ${email} not exists`
        });
    }
    const validPassword = yield bcrypt_1.default.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            msg: `Incorrect password`
        });
    }
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRETE_KEY || '61e7584460a65c30ed4ed318e5a8f2978108c1be6df235572c7d13a0f06837d9e2b2678ff3485bea3e259af18e9e398facabcfbc6ac73447f7efc8799d00c7b77fb368f5df5979c44578d84021bd8961da2548536e48581d83cf3c68fe1c2c9bafc4708812685a8741536729329c740e48e5673278ec3eada74bafe312e848b96aca65d32df310b2f9cc06fac200575a31415ff5ccf952504fc38bb465a976c0d73866890cb61a9619c0e4034b31c92c2e1549c511b7792b5c42481bcbecc59f0ace42248031b9100ce42e75eb21c8368b4eb2d675b54b64065ddc66613b99c816cf428b72ef198debe2e0e0a08840741d3c1788e3edcab90a26ab1f7440d5fb');
    res.json({ token });
});
exports.login = login;
