import { Router } from "express";
import { getStudents, registerStudent } from "../controllers/student";
import validateToken from "./validateToken";



const router = Router();

router.post("/api/student/register", registerStudent)
router.get("/api/student/getStudents", validateToken, getStudents)


export default router;