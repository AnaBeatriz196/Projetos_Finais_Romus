class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

export class LinkedStack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);
    node.prev = this.top;
    this.top = node;
  }

  pop() {
    if (this.isEmpty()) return null;
    const value = this.top.value;
    this.top = this.top.prev;
    return value;
  }

  isEmpty() {
    return this.top === null;
  }

  toArray() {
    let temp = this.top;
    const arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.prev;
    }
    return arr.reverse();
  }
}
