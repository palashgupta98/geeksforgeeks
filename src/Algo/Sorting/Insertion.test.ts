import Insertion from "./Insertion";

describe("Insertion Sort", () => {
  it("insertion sort", () => {
    const arr = new Insertion([3, 5, 1, 5, 6]);
    expect(arr.sort(arr.arr)).toEqual([1, 3, 5, 5, 6]);
  });
});
