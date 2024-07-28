import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../Controllers/User.controller.js";

import express from "express";
import { authenticate } from "../Middlewares/Auth.middleware.js";

const router = express.Router();

router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, deleteUser);
router.post("/login", loginUser);

export default router;
