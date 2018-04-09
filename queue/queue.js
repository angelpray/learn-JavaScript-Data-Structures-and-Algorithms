class Queue {
  contructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  front() {
    return this.items[0];
  }
  print() {
    return this.items.toString;
  }
}
