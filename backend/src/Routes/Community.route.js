// communityRoutes.js

import express from "express";
import {
  createCommunity,
  getCommunity,
  updateCommunity,
  deleteCommunity,
  joinCommunity,
  leaveCommunity,
  addModerator,
  removeModerator,
  getCommunities,
} from "../Controllers/Community.controller.js";
import { authenticate } from "../Middlewares/Auth.middleware.js";

const router = express.Router();

router.post("/", authenticate, createCommunity);
router.get("/", getCommunities);
router.get("/:id", getCommunity);
router.put("/:id", authenticate, updateCommunity);
router.delete("/:id", authenticate, deleteCommunity);
router.post("/:id/join", authenticate, joinCommunity);
router.post("/:id/leave", authenticate, leaveCommunity);
router.post("/:id/moderators", authenticate, addModerator);
router.delete("/:id/moderators", authenticate, removeModerator);

export default router;
