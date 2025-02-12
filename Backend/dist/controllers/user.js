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
exports.registrer = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const registrer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last_name, email, password, role, state } = req.body;
    const passwordHash = yield bcrypt_1.default.hash(password, 10);
    user_1.User.create({
        name: name,
        last_name: last_name,
        email: email,
        password: passwordHash,
        role: role,
        state: 1
    }).then((user) => {
        res.status(200).json({
            msg: "Usuario creado correctamente",
            user
        });
    }).catch((err) => {
        res.status(400).json({
            msg: "Error al crear el usuario",
            err
        });
    });
});
exports.registrer = registrer;
