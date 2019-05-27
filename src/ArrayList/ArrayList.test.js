import ArrayList from "./ArrayList";

let list = 0;
describe("Array List", () => {
  beforeEach(() => {
    list = new ArrayList();
  });

  it("create the array list", () => {
    expect(list.get(0)).toBe(undefined);
  });

  it("push the value", () => {
    list.push(1);
    expect(list.get(0)).toBe(1);
  });
});
