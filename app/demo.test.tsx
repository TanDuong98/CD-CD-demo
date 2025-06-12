import { sum } from "./sum";

describe("sum", () => {
  test("adds two positive numbers correctly", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("adds negative numbers correctly", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("adds a number with zero", () => {
    expect(sum(10, 0)).toBe(10);
  });
});
