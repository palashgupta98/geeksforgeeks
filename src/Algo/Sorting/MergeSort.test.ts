import MergeSort from "./MergeSort";

describe("Merge Sort", () => {
  it("Merge Sort Type 1", () => {
    const arr = new MergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);

    expect(arr.mergeSort(arr.arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
