import { sum } from "../math";

describe("sum", () => {
  it("adds numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
