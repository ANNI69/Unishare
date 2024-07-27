import express from 'express';
import { createCommunity, getCommunity, updateCommunity, deleteCommunity, joinCommunity } from '../Controllers/Community.controller.js';
import { authenticate, isModerator } from "../Middlewares/Auth.middleware.js";

const router = express.Router();

router.post('/', authenticate, createCommunity);
router.get('/:id', getCommunity);
router.put('/:id', authenticate, isModerator, updateCommunity);
router.delete('/:id', authenticate, isModerator, deleteCommunity);
router.post('/:id/join', authenticate, joinCommunity);

export default router;