import { describe, it, expect } from "vitest";
import { validateDateAndDescription } from "./validateDateAndDescription.js";
import { despesasModel } from "../models/despesas.model.js";
import { Categories } from "../types/despesasTypes.js";

describe("Testing function validateDateAndDescription()", () => {
  const createDocument = async () => [
    new despesasModel({
      categories: Categories.alimentação,
      date: 1668999600000,
      value: 30,
      description: "Descrição teste",
    }),
  ];

  it("Must return true", async () => {
    const result = await validateDateAndDescription(
      "testando",
      Date.now(),
      createDocument
    );

    expect(result).toBe(true);
  });

  it("Must return false", async () => {
    const result = await validateDateAndDescription(
      "teste",
      166899600000,
      createDocument
    );

    expect(result).toBe(false);
  });
});
