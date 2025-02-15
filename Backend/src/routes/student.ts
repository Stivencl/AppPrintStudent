import { Router } from "express";
import { getStudents, registerStudent } from "../controllers/student";



const router = Router();

router.post("/api/student/register", registerStudent)
router.get("/api/student/getStudents", getStudents)


export default router;