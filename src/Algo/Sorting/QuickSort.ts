class Quick {
  arr: Array<number>;

  constructor(arr: Array<number>) {
    this.arr = [...arr];
  }

  quickSort(arr: Array<number>): Array<Number | undefined> {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (pivot != undefined) {
        if (arr[i] < pivot) {
          leftArray.push(arr[i]);
        } else {
          rightArray.push(arr[i]);
        }
      }
    }

    return [...this.quickSort(leftArray), pivot, ...this.quickSort(rightArray)];
  }
}

export default Quick;
