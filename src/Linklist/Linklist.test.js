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
});
