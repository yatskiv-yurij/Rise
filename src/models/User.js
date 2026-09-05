import mongoose from "mongoose";

const authProviderSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
      enum: ["google"],
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  },
);

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    passwordHash: {
      type: String,
      default: null,
    },
    providers: {
      type: [authProviderSchema],
      default: [],
    },

    avatarUrl: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.index(
  { "providers.provider": 1, "providers.providerId": 1 },
  { unique: true, sparse: true },
);

const User = mongoose.model("User", userSchema);
export default User;
