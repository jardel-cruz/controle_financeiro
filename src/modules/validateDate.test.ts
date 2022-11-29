import { describe, it, expect } from "vitest";
import { validateDate } from "./validateDate.js";

describe("Testing function validateDate()", () => {
  it("Must return true", async () => {
    const result = await validateDate("20/12/2003");

    expect(result).toBe(true);
  });

  it("Must return false", async () => {
    const result = await validateDate("32/12/2003");

    expect(result).toBe(false);
  });
});
