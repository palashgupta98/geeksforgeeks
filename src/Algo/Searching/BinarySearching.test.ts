import BinaryTest from "./BinarySearching";

describe("Test for the binary Search", () => {
  it("binary test for empty array", () => {
    const binary = new BinaryTest([]);

    //empty array results no results
    expect(binary.search({ no: 1 })).toBe(-1);
  });
});
