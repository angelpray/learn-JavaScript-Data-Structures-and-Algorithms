let Stack = (function stack() {
  const items = new WeakMap();
  class MyStack {
    constructor() {
      items.set(this, []);
    }

    push(element) {
      let itemsArray = items.get(this);
      itemsArray.push(element);
    }
    pop() {
      let itemsArray = items.get(this);
      var pop = itemsArray.pop();
      return pop;
    }
    isEmpty() {
      let itemsArray = items.get(this);
      return itemsArray.length === 0;
    }
    size() {
      let itemsArray = items.get(this);
      return itemsArray.length;
    }
    clear() {
      let itemsArray = items.get(this);
      itemsArray = [];
    }
    print() {
      let itemsArray = items.get(this);
      return itemsArray.toString();
    }
    peek() {
      let itemsArray = items.get(this);
      return itemsArray[itemsArray - 1];
    }
  }
  return MyStack;
}());
