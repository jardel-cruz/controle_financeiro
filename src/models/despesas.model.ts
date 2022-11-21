import mongoose from "mongoose";
import type { IDespesas } from "../types/despesasTypes.js";

const despesasSchema = new mongoose.Schema<IDespesas>(
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

export const despesasModel = mongoose.model("Despesas", despesasSchema);
