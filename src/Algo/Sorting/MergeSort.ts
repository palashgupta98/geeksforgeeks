class Merge {
  arr: Array<number>;

  constructor(arr: Array<number>) {
    this.arr = [...arr];
  }

  mergeSort(arr: Array<number | undefined> = this.arr): Array<number | undefined> {
    if (arr.length < 2) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);

    const leftArraySorted = this.mergeSort(arr.slice(0, middle));
    const rightArraySorted = this.mergeSort(arr.slice(middle, arr.length));

    return this.stich(leftArraySorted, rightArraySorted);
  }

  stich(
    arr1: Array<number | undefined>,
    arr2: Array<number | undefined>,
  ): Array<number | undefined> {
    const result: Array<number | undefined> = [];

    while (arr1.length && arr2.length) {
      if (((arr1[0] as number) < (arr2[0] as number)) as boolean) {
        result.push(arr1.shift());
      } else {
        result.push(arr2.shift());
      }
    }

    while (arr1.length) {
      result.push(arr1.shift());
    }

    while (arr2.length) {
      result.push(arr2.shift());
    }

    return result;
  }
}

export default Merge;
