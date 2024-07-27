import mongoose from "mongoose";
const { Schema, model } = mongoose;

const communitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moderators: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    rules: [
      {
        type: String,
        trim: true,
      },
    ],
    postTypes: [
      {
        type: String,
        enum: ["text", "link", "image", "video"],
        default: ["text"],
      },
    ],
    privacyType: {
      type: String,
      enum: ["public", "private", "restricted"],
      default: "public",
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    customization: {
      bannerImage: String,
      iconImage: String,
      primaryColor: String,
      secondaryColor: String,
    },
    postCount: {
      type: Number,
      default: 0,
    },
    memberCount: {
      type: Number,
      default: 0,
    },
    isNSFW: {
      type: Boolean,
      default: false,
    },
    bannedUsers: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        reason: String,
        bannedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    flairs: [
      {
        name: String,
        color: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

communitySchema.index({ name: 1 });
communitySchema.index({ tags: 1 });
communitySchema.index({ createdAt: -1 });

communitySchema.virtual("url").get(function () {
  return `/community/${this._id}`;
});

export const Community =
  mongoose.models.Community || model("Community", communitySchema);
export default Community;
