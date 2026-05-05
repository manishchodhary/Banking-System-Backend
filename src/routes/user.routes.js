import { Router } from "express";
import { Register } from "../controllers/user.controller.js";

const router = Router()

router("/api/user/register",Register)