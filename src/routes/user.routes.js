import { Router } from "express";
import { Register } from "../controllers/user.controller.js";

const router = Router()

router.post("/api/user/register",Register)




export default router;