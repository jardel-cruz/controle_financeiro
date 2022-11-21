import mongoose from "mongoose";
import { v4 as uuidV4 } from "uuid";
import type { IReceitas } from "../types/receitasTypes.js";

const receitasSchema = new mongoose.Schema<IReceitas>(
  {
    _id: {
      type: String,
      default: uuidV4(),
    },
    description: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      default: 0,
    },
    date: {
      type: Number,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export const receitasModel = mongoose.model("Receitas", receitasSchema);
