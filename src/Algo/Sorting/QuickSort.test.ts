import QuickSort from "./QuickSort";

describe("Quick Sort", () => {
  it("Quick Sort", () => {
    const arr = new QuickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);

    expect(arr.quickSort(arr.arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
