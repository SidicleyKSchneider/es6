const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã", "abacate", "abacaxi"];

const squareArr = arr.map(function (item, index) {
  return item * item;
})

const fruitPosition = cesta.map(function (item, index) {
  return `A/O ${item} está na posição ${index} do array`;
});

//console.log(squareArr);
//console.log(fruitPosition);

const sum = arr.reduce(function (total, next) {
  //console.log("total ", total);
  //console.log("next ", next);
  return total + next;
});

//console.log(sum);

const filter = arr.filter(function (item) {
  return item % 2 === 0;
});

const filter2 = cesta.filter(function (item) {
  return item === "banana";
});

//console.log(filter);
//console.log(filter2);

const find = arr.find(function (item) {
  return item === 3;
});
const find2 = cesta.find(function (item) {
  return item === "maçã";
});

console.log(find);
console.log(find2);