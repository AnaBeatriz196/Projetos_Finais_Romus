class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  append(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) current = current.next;
      current.next = node;
    }
    this._size++;
  }

  removeAt(index) {
    if (index < 0 || index >= this._size) return null;

    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = current.next;
    }
    this._size--;
  }

  toArray() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.element);
      current = current.next;
    }
    return arr;
  }

  clear() {
    this.head = null;
    this._size = 0;
  }
}
