// 最简单的定义栈的方式
function Stack() {
  let items = [];
  this.push = function push(element) {
    items.push(element);
  };
  this.pop = function pop() {
    return items.pop();
  };
  this.size = function size() {
    return items.length;
  };
  this.print = function print() {
    return (items.toString());
  };
  this.isEmpty = function isEmpty() {
    return items.length === 0;
  };
  this.peek = function peek() {
    return items[items.length - 1];
  };
}
