import mongoose from "mongoose";
import type { IUser } from "../types/userTypes.js";

const userSchema = new mongoose.Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("Users", userSchema);
