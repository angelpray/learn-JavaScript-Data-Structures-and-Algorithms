let _items = Symbol("使用ES6方法限定items的作用域");
class Stack {
  constructor() {
    this[_items] = [];
  }
  push(element) {
    this[_items].push(element);
  }
  pop() {
    return this[_items].pop();
  }
  size() {
    return this[_items].length;
  }
  isEmpty() {
    return this[_items].length === 0;
  }
  peek() {
    return this[_items][this[_items].length - 1];
  }
  print() {
    return this[_items].toString;
  }
}
