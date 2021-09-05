"use strict";

const Node = require("../node");

describe("Node", () => {
  it("should create new node ", () => {
    let newNode = new Node(10);
    expect(newNode.value).toEqual(10);
    expect(newNode.next).toBeNull();
  });
});