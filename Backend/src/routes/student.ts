import { Router } from "express";
import { registrerStudent } from "../controllers/student";



const router = Router();

router.post("/api/student/registrer", registrerStudent)

export default router;