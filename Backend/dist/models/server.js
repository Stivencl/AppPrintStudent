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
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../routes/user"));
const student_1 = __importDefault(require("../routes/student"));
const user_2 = require("./user");
const student_2 = require("./student");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.midleware();
        this.router();
        this.DBconnet();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
    router() {
        this.app.use(user_1.default);
        this.app.use(student_1.default);
    }
    midleware() {
        this.app.use(express_1.default.json());
    }
    DBconnet() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // await sequelize.authenticate();
                yield user_2.User.sync();
                yield student_2.Student.sync();
                console.log('The table for the user model was just (re)create!');
                console.log('Connection has been established successfully.');
            }
            catch (error) {
                console.log('Connection has been declined', error);
            }
        });
    }
}
exports.default = Server;
