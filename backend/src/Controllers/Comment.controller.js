import Comment from '../models/Comment.model.js';
import Post from '../models/post.model.js';

export const createComment = async (req, res) => {
  try {
    const post = await Post.findById(req.body.post);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = new Comment({
      content: req.body.content,
      author: req.user._id,
      post: req.body.post,
      parentComment: req.body.parentComment
    });

    await newComment.save();
    post.commentCount++;
    await post.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
      .populate('author', 'username')
      .populate('replies');
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
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to edit this comment' });
    }
    comment.content = req.body.content;
    comment.isEdited = true;
    comment.editedAt = Date.now();
    await comment.save();
    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    if (comment.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }
    await comment.softDelete();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const voteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await comment.vote(req.user._id, req.body.voteType);
    res.json({ message: 'Vote recorded successfully', score: comment.score });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};