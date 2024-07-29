import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Authentication middleware
export const authenticate = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

// Check if the user is the author of the post
export const isPostAuthor = async (req, res, next) => {
  try {
    const post = await prisma.post.findUnique({ where: { id: parseInt(req.params.id) } });
    if (!post) {
      return res.status(404).send({ error: 'Post not found.' });
    }
    if (post.authorId !== req.user.id) {
      return res.status(403).send({ error: 'You are not authorized to perform this action.' });
    }
    next();
  } catch (error) {
    res.status(500).send({ error: 'Server error.' });
  }
};

// Check if the user is a moderator of the community
export const isCommunityModerator = async (req, res, next) => {
  try {
    const community = await prisma.community.findUnique({
      where: { id: parseInt(req.params.id) },
      include: { moderators: true }
    });
    if (!community) {
      return res.status(404).send({ error: 'Community not found.' });
    }
    if (!community.moderators.some(mod => mod.id === req.user.id)) {
      return res.status(403).send({ error: 'You are not a moderator of this community.' });
    }
    next();
  } catch (error) {
    res.status(500).send({ error: 'Server error.' });
  }
};

// Validate user input for user creation
export const validateUserInput = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send({ error: 'All fields are required.' });
  }
  if (password.length < 6) {
    return res.status(400).send({ error: 'Password must be at least 6 characters long.' });
  }
  next();
};

// Hash password before saving
export const hashPassword = async (req, res, next) => {
  if (req.body.password) {
    req.body.password = await bcryptjs.hash(req.body.password, 8);
  }
  next();
};