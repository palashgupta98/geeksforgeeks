import LinkList from "./Linklist";
import Node from "./Node";

let list = 0;

describe("LinkList", () => {
  beforeEach(() => {
    list = new LinkList();
    list.head = new Node(1);
    list.head.next = new Node(2);
    list.head.next.next = new Node(3);
    list.head.next.next.next = new Node(4);
  });

  it("create List", () => {
    expect(list.head.value).toEqual(1);
    expect(list.head.next).not.toBe(null);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);

    // list.print();
  });

  it("insert the new node", () => {
    list.insertAtHead(7);
    expect(list.head.value).toEqual(7);
    expect(list.head.next.value).toEqual(1);
  });

  it("delete head", () => {
    list.head = list.head.next;
    expect(list.head.value).toEqual(2);
  });

  it("delete with given value", () => {
    list.deleteAtKey(2);
    expect(list.head.next.value).toEqual(3);
  });

  it("length iterative", () => {
    const length = list.lengthIterative();
    expect(length).toEqual(4);
  });

  // get the length in O(N)
  it("length iterative", () => {
    const length = list.lengthRecrsive(list.head);
    expect(length).toEqual(4);
  });

  // search the element in the O(N)
  it("search iterative", () => {
    const found = list.searchIterative(2);
    const found1 = list.searchIterative(21);

    expect(found).toBe(true);
    expect(found1).toBe(false);
  });

  it("search iterative", () => {
    const found = list.searchRecursive(list.head, 2);
    const found1 = list.searchRecursive(list.head, 20);
    expect(found).toBe(true);
    expect(found1).toBe(false);
  });

  // get the length and then get the n node form last using l-n-1
  it("get nth node from last", () => {
    const node = list.getLastNode(0);
    const node1 = list.getLastNode(1);
    const node2 = list.getLastNode(2);

    expect(node.value).toBe(4);
    expect(node1.value).toBe(3);
    expect(node2.value).toBe(2);
  });

  it("getLastNodefromlast", () => {
    const node = list.getLastNodefromlast(4);
    const node1 = list.getLastNodefromlast(3);

    expect(node.value).toBe(1);
    expect(node1.value).toBe(2);
  });
});
