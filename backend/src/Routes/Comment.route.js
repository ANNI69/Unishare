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
import { authenticate } from "../Middlewares/Auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createComment);
router.get("/:id", getComment);
router.put("/:id", authenticate, updateComment);
router.delete("/:id", authenticate, deleteComment);
router.post("/:id/vote", authenticate, voteComment);
router.get("/post/:postId", getCommentsByPost);

export default router;
