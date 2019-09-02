class TwoArray {
  arr1: Array<number>;
  arr2: Array<number>;

  constructor(arr1: Array<number>, arr2: Array<number>) {
    this.arr1 = [...arr1];
    this.arr2 = [...arr2];
  }

  public sort(arr1: Array<number>, arr2: Array<number>): Array<number> {
    let result: Array<number> = [];

    let x = 0;
    let y = 0;
    let i: number;

    for (i = 0; x < arr1.length && y < arr2.length; i++) {
      if (arr1[x] >= arr2[y]) {
        result.push(arr2[y]);
        y++;
      } else {
        result.push(arr1[x]);
        x++;
      }
    }

    while (x < arr1.length) {
      result.push(arr1[x]);
      x++;
    }

    while (y < arr2.length) {
      result.push(arr2[y]);
      y++;
    }

    return result;
  }
}

export default TwoArray;
