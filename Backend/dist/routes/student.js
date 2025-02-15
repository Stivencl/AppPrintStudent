"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = (0, express_1.Router)();
router.post("/api/student/register", student_1.registerStudent);
router.get("/api/student/getStudents", student_1.getStudents);
exports.default = router;
