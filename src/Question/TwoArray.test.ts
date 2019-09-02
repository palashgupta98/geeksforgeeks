import TwoArray from "./TwoArray";

describe("Two Array", () => {
  it("Test Two Array type1", () => {
    const array = new TwoArray([1, 4, 6, 8], [12, 45, 78, 98, 234, 656]);
    expect(array.sort(array.arr1, array.arr2)).toEqual([1, 4, 6, 8, 12, 45, 78, 98, 234, 656]);
  });

  it("Test Two Array type2", () => {
    const arr = new TwoArray([1, 4, 7, 9], [3, 5, 6]);
    expect(arr.sort(arr.arr1, arr.arr2)).toEqual([1, 3, 4, 5, 6, 7, 9]);
  });

  it("Test Two Array type3", () => {
    const arr = new TwoArray([1, 3], [2, 4]);
    expect(arr.sort(arr.arr1, arr.arr2)).toEqual([1, 2, 3, 4]);
  });
});
