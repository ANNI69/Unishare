import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  parentComment: {
    type: Schema.Types.ObjectId,
    ref: 'Comment'
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
  isEdited: {
    type: Boolean,
    default: false
  },
  editedAt: {
    type: Date
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

commentSchema.index({ post: 1, createdAt: -1 });
commentSchema.index({ author: 1, createdAt: -1 });

commentSchema.virtual('replies', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'parentComment'
});

commentSchema.methods.vote = function(userId, voteType) {
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

commentSchema.methods.softDelete = function() {
  this.isDeleted = true;
  this.content = '[deleted]';
  return this.save();
};

export const Comment = mongoose.models.Comment || model('Comment', commentSchema);

export default Comment;