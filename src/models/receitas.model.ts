import mongoose from "mongoose";
import type { IReceitas } from "../types/receitasTypes.js";

const receitasSchema = new mongoose.Schema<IReceitas>(
  {
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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const receitasModel = mongoose.model("Receitas", receitasSchema);
