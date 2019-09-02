class Insertion {
  arr: Array<number>;

  constructor(arr: Array<number>) {
    this.arr = [...arr];
  }

  sort(arr: Array<number>): Array<number> {
    for (let i = 0; i < arr.length; i++) {
      let j = i;

      while (j > 0 && arr[j] < arr[j - 1]) {
        arr[j] = arr[j] ^ arr[j - 1];
        arr[j - 1] = arr[j] ^ arr[j - 1];
        arr[j] = arr[j] ^ arr[j - 1];
        j--;
      }
    }

    return arr;
  }
}

export default Insertion;
