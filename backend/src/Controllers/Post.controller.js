import Post from '../Models/Post.model.js';
import Community from '../Models/Community.model.js';

export const createPost = async (req, res) => {
  try {
    const community = await Community.findById(req.body.community);
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }

    const newPost = new Post({
      ...req.body,
      author: req.user._id
    });

    await newPost.save();
    community.postCount++;
    await community.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username')
      .populate('community', 'name');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to edit this post' });
    }
    Object.assign(post, req.body);
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (post.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }
    await post.remove();
    const community = await Community.findById(post.community);
    community.postCount--;
    await community.save();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const votePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.vote(req.user._id, req.body.voteType);
    res.json({ message: 'Vote recorded successfully', score: post.score });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
