import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  community: {
    type: Schema.Types.ObjectId,
    ref: 'Community',
    required: true
  },
  postType: {
    type: String,
    enum: ['text', 'file', 'image', 'video', 'link'], 
    default: 'text'
  },
  url: {
    type: String,
    trim: true
  },
  mediaUrl: {
    type: String,
    trim: true
  },
  upvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  downvotes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  score: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  isNSFW: {
    type: Boolean,
    default: false
  },
  isSpoiler: {
    type: Boolean,
    default: false
  },
  flair: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

postSchema.index({ community: 1, createdAt: -1 });
postSchema.index({ author: 1, createdAt: -1 });
postSchema.index({ tags: 1 });
postSchema.index({ score: -1 });

postSchema.virtual('voteCount').get(function() {
  return this.upvotes.length - this.downvotes.length;
});

postSchema.methods.vote = function(userId, voteType) {
  const upIndex = this.upvotes.indexOf(userId);
  const downIndex = this.downvotes.indexOf(userId);

  if (voteType === 'up') {
    if (upIndex === -1) this.upvotes.push(userId);
    if (downIndex !== -1) this.downvotes.splice(downIndex, 1);
  } else if (voteType === 'down') {
    if (downIndex === -1) this.downvotes.push(userId);
    if (upIndex !== -1) this.upvotes.splice(upIndex, 1);
  } else {
    if (upIndex !== -1) this.upvotes.splice(upIndex, 1);
    if (downIndex !== -1) this.downvotes.splice(downIndex, 1);
  }

  this.score = this.upvotes.length - this.downvotes.length;
  return this.save();
};

export const Post = mongoose.models.Post || model('Post', postSchema);

export default Post;