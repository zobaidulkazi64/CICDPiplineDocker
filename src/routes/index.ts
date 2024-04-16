import express from "express";
const router = express.Router();
import { createUser } from "@/controllers";

router.post("/users", createUser);

export default router;
