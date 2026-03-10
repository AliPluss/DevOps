// import for exprss og cntorller

import { Router } from "express";
//importerer nødvendige moduler og filer
import * as authController from "../controllers/authcontroller.js";

//oppretter router for auth, som skal håndtere ruter for login og register
const router = Router();
//ruter for login og register
router.post("/register", authController.register);
router.post("/login", authController.login);
export default router;