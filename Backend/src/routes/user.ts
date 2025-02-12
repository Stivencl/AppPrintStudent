import { Router } from "express";
import { registrer } from "../controllers/user";


const router = Router();

router.post("/api/user/registrer", registrer)

export default router;