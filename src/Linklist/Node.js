/**
 * @flow
 */
class Node {
  value: Number;

  next: Node | null;

  constructor(value: Number) {
    this.value = value;
    this.next = null;
  }
}

export default Node;
