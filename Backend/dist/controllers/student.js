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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrerStudent = void 0;
const student_1 = require("../models/student");
const registrerStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, name, last_name, id_guardian, eps, rh, birthdate, inf_acad, inf_medical, inf_vuln, code_dane, piar } = req.body;
    student_1.Student.create({
        id: id,
        name: name,
        last_name: last_name,
        id_guardian: id_guardian,
        eps: eps,
        rh: rh,
        birthdate: birthdate,
        inf_acad: inf_acad,
        inf_medical: inf_medical,
        inf_vuln: inf_vuln,
        code_dane: code_dane,
        piar: piar,
    }).then((student) => {
        res.status(200).json({
            msg: "Estudiante creado correctamente",
            student
        });
    }).catch((err) => {
        res.status(400).json({
            msg: "Error al crear el estudiante",
            err
        });
    });
});
exports.registrerStudent = registrerStudent;
