const Stack = (function stack() {
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
      let pop = itemsArray.pop();
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
      return itemsArray[itemsArray.length - 1];
    }
  }
  return MyStack;
}());

function baseConverter(number, base) {
  let outputString = "";
  let digits = "0123456789ABCDEF";
  let remStack = new Stack();
  let rem = 0;
  let decNumber = number;

  // 该算法仅仅正整数可转换
  if (parseInt(decNumber, 10) !== decNumber) {
    return "please input the int";
  }
  // 压栈
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }
  // 出栈
  while (!remStack.isEmpty()) {
    outputString += digits[remStack.pop()];
  }
  return outputString;
}
baseConverter(10, 2);
