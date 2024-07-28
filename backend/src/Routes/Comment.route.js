// commentRoutes.js

import express from "express";
import {
  createComment,
  getComment,
  updateComment,
  deleteComment,
  voteComment,
  getCommentsByPost,
} from "../Controllers/Comment.controller.js";
import { authenticate } from "../middleware/authMiddleware.js"; // Assuming you have an authentication middleware

const router = express.Router();

router.post("/", authenticate, createComment);
router.get("/:id", getComment);
router.put("/:id", authenticate, updateComment);
router.delete("/:id", authenticate, deleteComment);
router.post("/:id/vote", authenticate, voteComment);
router.get("/post/:postId", getCommentsByPost);

export default router;
