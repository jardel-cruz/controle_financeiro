import { describe, it, expect } from "vitest";
import { compareDate } from "./compareDate.js";

describe("Testing function parserDate()", () => {
  it("Must Return true", () => {
    const [argument1, argument2] = [Date.now(), Date.now()];
    const result = compareDate(argument1, argument2);

    expect(result).toBe(true);
  });

  it("Must Return false", () => {
    const [argument1, argument2] = [
      new Date("2022/02/10").getTime(),
      new Date("2022/03/10").getTime(),
    ];
    const result = compareDate(argument1, argument2);

    expect(result).toBe(false);
  });
});
