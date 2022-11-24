import { describe, it, expect } from "vitest";
import { compareDate } from "./compareDate.js";

describe("Testing function compareDate()", () => {
  it("Must return true", () => {
    const [argument1, argument2] = [Date.now(), Date.now()];
    const result = compareDate(argument1, argument2);

    expect(result).toBe(true);
  });

  it("Must return true", () => {
    const [argument1, argument2] = [
      new Date("2022/10/10").getTime(),
      new Date("2022/10/11").getTime(),
    ];
    const result = compareDate(argument1, argument2);

    expect(result).toBe(true);
  });
});
