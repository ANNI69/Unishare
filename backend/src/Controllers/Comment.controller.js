// commentController.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createComment = async (req, res) => {
  try {
    const { content, postId } = req.body;
    const authorId = req.user.id; // Assuming you have user info in req.user after authentication

    const newComment = await prisma.comment.create({
      data: {
        content,
        author: { connect: { id: authorId } },
        post: { connect: { id: postId } }
      },
      include: {
        author: { select: { id: true, username: true } }
      }
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.comment.findUnique({
      where: { id },
      include: {
        author: { select: { id: true, username: true } },
        upvotedBy: { select: { id: true } },
        downvotedBy: { select: { id: true } }
      }
    });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    const comment = await prisma.comment.findUnique({ where: { id } });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.authorId !== userId) {
      return res.status(403).json({ message: 'Not authorized to update this comment' });
    }

    const updatedComment = await prisma.comment.update({
      where: { id },
      data: { content }
    });

    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const comment = await prisma.comment.findUnique({ where: { id } });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.authorId !== userId) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    await prisma.comment.delete({ where: { id } });

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const voteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { voteType } = req.body; // 'upvote' or 'downvote'
    const userId = req.user.id;

    const comment = await prisma.comment.findUnique({ where: { id } });

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    let updateData = {};

    if (voteType === 'upvote') {
      updateData = {
        upvotedByIds: { push: userId },
        downvotedByIds: { set: comment.downvotedByIds.filter(id => id !== userId) }
      };
    } else if (voteType === 'downvote') {
      updateData = {
        downvotedByIds: { push: userId },
        upvotedByIds: { set: comment.upvotedByIds.filter(id => id !== userId) }
      };
    } else {
      return res.status(400).json({ message: 'Invalid vote type' });
    }

    const updatedComment = await prisma.comment.update({
      where: { id },
      data: updateData,
      include: {
        upvotedBy: { select: { id: true } },
        downvotedBy: { select: { id: true } }
      }
    });

    res.json(updatedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCommentsByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await prisma.comment.findMany({
      where: { postId },
      include: {
        author: { select: { id: true, username: true } },
        upvotedBy: { select: { id: true } },
        downvotedBy: { select: { id: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};