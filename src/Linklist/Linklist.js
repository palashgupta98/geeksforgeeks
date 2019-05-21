/**
 * @flow
 */
/* eslint-disable no-console */

import Node from "./Node";

class Linklist {
  head: Node;

  constructor() {
    this.head = null;
  }

  /**
   * @description used to print the linklist
   */
  print() {
    let node = this.head;
    while (node != null) {
      console.log(node.value);
      node = node.next;
    }
  }

  insertAtHead(value: Number) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @description iterative function to delete the key
   * @param {Number} key
   * @returns {Boolean}
   */
  deleteAtKey(key: Number) {
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
}

export default Linklist;
