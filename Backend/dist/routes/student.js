"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_1 = require("../controllers/student");
const router = (0, express_1.Router)();
router.post("/api/student/registrer", student_1.registrerStudent);
exports.default = router;
