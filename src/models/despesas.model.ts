import mongoose from "mongoose";
import { v4 as uuidV4 } from "uuid";
import type { IDespesas } from "../types/despesasTypes.js";

const despesasSchema = new mongoose.Schema<IDespesas>(
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
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const despesasModel = mongoose.model("Despesas", despesasSchema);
