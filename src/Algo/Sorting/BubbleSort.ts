class Sort {
  arr: number[];

  constructor(arr: number[]) {
    this.arr = [...arr];
  }

  bubbleSort(arr = this.arr): void {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
          //swapping with xor with x[j] and x[j+1]
          arr[j] = arr[j] ^ arr[j + 1];
          arr[j + 1] = arr[j] ^ arr[j + 1];
          arr[j] = arr[j] ^ arr[j + 1];
        }
      }
    }
  }

  bubbleSortOptimised(arr = this.arr): void {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          //swapping with xor with x[j] and x[j+1]
          arr[j] = arr[j] ^ arr[j + 1];
          arr[j + 1] = arr[j] ^ arr[j + 1];
          arr[j] = arr[j] ^ arr[j + 1];
        }
      }
    }
  }
}

export default Sort;
