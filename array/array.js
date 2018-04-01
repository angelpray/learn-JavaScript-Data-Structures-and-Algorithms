function compare(a, b) {
  // 增序a-b，降序b-a
  return a - b;
}
function objectCompare(a, b) {
  return a.age - b.age;
}
let array = [10, 1, 2, 20, 3, 4, 6, 5];
let objectArray = [{
  name: "AB",
  age: 23,
}, {
  name: "JC",
  age: 22,
}];

array.sort(); // [1, 10, 2, 20, 3, 4, 5, 6]
array.sort(compare); // [1, 2, 3, 4, 5, 6, 10, 20]

objectArray.sort(objectCompare);
// 数组序列变为，0:JC,1:AB
