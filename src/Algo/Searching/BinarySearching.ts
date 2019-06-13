class BinarySearch {
  arr: Array<Number> = [];

  constructor(arr: Array<Number>) {
    this.arr = arr;
  }

  search({ no }: { no: Number }) {
    let l = 0;
    let r = this.arr.length - 1;
    while (l < r) {
      let mid = l + (r - 1) / 2;

      if (this.arr[mid] == no) return mid;

      if (this.arr[mid] < no) l = mid + 1;
      else r = mid - 1;
    }
    return -1;
  }
}

export default BinarySearch;
