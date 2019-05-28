class ArrayList {
  size = 0;

  array: Array<number>;

  constructor() {
    this.array = new Array(10);
  }

  get(n: number): Number {
    if (n > this.size) {
      throw new Error("Cannot get the max valued");
    }
    return this.array[n];
  }

  push(value: number): void {
    this.array[this.size] = value;
    this.size = this.size + 1;
  }
}

export default ArrayList;
