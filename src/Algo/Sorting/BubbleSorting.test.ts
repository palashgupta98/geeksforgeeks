import BubbleSort from "./BubbleSort";

describe("Bubble Sort", () => {
  it("Bubble Sort", () => {
    const arr = new BubbleSort([8, 4, 1, -12]);
    arr.bubbleSort(arr.arr);
    expect(arr.arr).toEqual([-12, 1, 4, 8]);
  });
});
