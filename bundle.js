"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ["banana", "maçã", "abacate", "abacaxi"];
var squareArr = arr.map(function (item, index) {
  return item * item;
});
var fruitPosition = cesta.map(function (item, index) {
  return "A/O ".concat(item, " est\xE1 na posi\xE7\xE3o ").concat(index, " do array");
});
console.log(squareArr);
console.log(fruitPosition);
var sum = arr.reduce(function (total, next) {
  return total + next;
}); //console.log("total ", total);
//console.log("next ", next);

console.log(sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var filter2 = cesta.filter(function (item) {
  return item === "banana";
});
console.log(filter);
console.log(filter2);
var find = arr.find(function (item) {
  return item === 3;
});
var find2 = cesta.find(function (item) {
  return item === "maçã";
});
console.log(find);
console.log(find2);
