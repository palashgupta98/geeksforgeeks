import Node from "./Node";

describe("Node", () => {
  it("create node with value 1", () => {
    const node = new Node(1);
    expect(node.value).toEqual(1);
    expect(node.next).toBeNull();
  });
});
