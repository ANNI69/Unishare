import express from 'express';
import { createPost, getPost, updatePost, deletePost, votePost } from '../Controllers/Post.controller.js';
import { authenticate, isPostAuthor } from "../Middlewares/Auth.middleware.js";

const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/:id', getPost);
router.put('/:id', authenticate, isPostAuthor, updatePost);
router.delete('/:id', authenticate, isPostAuthor, deletePost);
router.post('/:id/vote', authenticate, votePost);

export default router;
