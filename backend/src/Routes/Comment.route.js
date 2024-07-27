import express from 'express';
import { createComment, getComment, updateComment, deleteComment, voteComment } from '../controllers/Comment.controller.js';
import { authenticate, isCommentAuthor } from '../Middlewares/Auth.middleware.js';

const router = express.Router();

router.post('/', authenticate, createComment);
router.get('/:id', getComment);
router.put('/:id', authenticate, isCommentAuthor, updateComment);
router.delete('/:id', authenticate, isCommentAuthor, deleteComment);
router.post('/:id/vote', authenticate, voteComment);

export default router;