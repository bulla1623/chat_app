import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

const router = express.Router();

// router.get("/api/auth/signup", signup);
// router.get("/api/auth/login", login);
// router.get("/api/auth/logout", logout);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;