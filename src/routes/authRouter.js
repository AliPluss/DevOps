// import for exprss og cntorller
 
import{ Router } from "express";
 
import * as authController from "../controllers/authcontroller.js";
 
const router = Router();
router.post("/login", authController.login);
export default router;