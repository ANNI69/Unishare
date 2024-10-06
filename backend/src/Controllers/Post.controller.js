
export const createPost = async (req, res) => {
  try {
    
    // Check if an image is uploaded
    let imageUrl = "";
    if (req.file) {
      // req.file contains the Cloudinary upload result
      imageUrl = req.file.path; // Cloudinary URL for the uploaded image
    }

    // Create the post with the image URL if provided
    const newPost = new Post({
      ...req.body,
      author: req.user._id,
      imageUrl: imageUrl, // Save the Cloudinary URL to the post
    });

    // Save the new post
    await newPost.save();

    // Increment the post count for the community
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
      .populate("author", "username")
      .populate("community", "name");
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
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
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.author.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to edit this post" });
    }

    // Update image if a new file is uploaded
    if (req.file) {
      const imageUrl = req.file.path; // Get Cloudinary URL for the new image
      post.imageUrl = imageUrl; // Update the post image URL
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
      return res.status(404).json({ message: "Post not found" });
    }
    if (post.author.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this post" });
    }

    // Optionally delete the image from Cloudinary
    if (post.imageUrl) {
      const publicId = post.imageUrl.split("/").pop().split(".")[0]; // Extract public ID from URL
      await cloudinary.uploader.destroy(publicId); // Delete the image from Cloudinary
    }

    await post.remove();

    const community = await Community.findById(post.community);
    community.postCount--;
    await community.save();

    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const votePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await post.vote(req.user._id, req.body.voteType);
    res.json({ message: "Vote recorded successfully", score: post.score });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
