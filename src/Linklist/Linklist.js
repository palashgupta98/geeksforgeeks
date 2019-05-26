/**
 * @flow
 */
/* eslint-disable no-console */
import Node from "./Node";

class Linklist {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  /**
   * @description used to print the linklist
   */
  print(): void {
    let node = this.head;
    while (node != null) {
      console.log(node.value);
      node = node.next;
    }
  }

  insertAtHead(value: number): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @description iterative function to delete the key
   * @param {Number} key
   * @returns Boolean
   */
  deleteAtKey(key: number): boolean {
    let node = this.head;
    if (node.value === key) {
      this.head = this.head.next;
      return true;
    }
    while (node.next != null) {
      if (node.next.value === key) {
        node.next = node.next.next;
        break;
      }
      node = node.next;
    }
    return true;
  }

  lengthIterative(): number {
    let node = this.head;
    let count = 0;
    while (node != null) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  lengthRecrsive(head: Node): number {
    if (head == null) {
      return 0;
    }
    return 1 + this.lengthRecrsive(head.next);
  }

  searchIterative(key: number): boolean {
    let node = this.head;
    let found = false;
    while (node != null) {
      if (node.value === key) {
        found = true;
        break;
      }
      node = node.next;
    }
    return found;
  }

  searchRecursive(head: Node, key: number): boolean {
    if (head === null) {
      return false;
    }
    if (head.value === key) {
      return true || this.searchRecursive(head.next, key);
    }
    return false || this.searchRecursive(head.next, key);
  }

  getLastNode(n: number): Node {
    let l = 0;
    let node = this.head;
    let slow = this.head;
    while (node != null) {
      l += 1;
      node = node.next;
    }
    for (let i = 0; i < l - n - 1; i += 1) {
      slow = slow.next;
    }
    return slow;
  }

  getLastNodefromlast(n: number): Node {
    let slow = this.head;
    let fast = this.head;

    let count = 0;
    while (count < n) {
      if (fast === null) {
        return null;
      }
      count += 1;
      fast = fast.next;
    }

    while (fast != null) {
      fast = fast.next;
      slow = slow.next;
    }

    return slow;
  }
}

export default Linklist;
