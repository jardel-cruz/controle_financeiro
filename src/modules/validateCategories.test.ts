import { describe, it, expect } from "vitest";
import { Categories } from "../types/despesasTypes";
import { validateCategories } from "./validateCategories.js";

describe("Testing function validateCategories()", () => {
  it("Must return true", async () => {
    const result = await validateCategories(Categories.alimentação);

    expect(result).toBe(true);
  });

  it("Must return false", async () => {
    const result = await validateCategories("not category" as Categories);

    expect(result).toBe(false);
  });
});
