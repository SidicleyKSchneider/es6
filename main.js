const arr = [1, 2, 3, 4, 5, 6];
const cesta = ["banana", "maçã", "abacate", "abacaxi"];

const squareArr = arr.map((item, index) => item * item);

const fruitPosition = cesta.map((item, index) => `A/O ${item} está na posição ${index} do array`);

console.log(squareArr);
console.log(fruitPosition);

const sum = arr.reduce((total, next) => total + next);
//console.log("total ", total);
//console.log("next ", next);

console.log(sum);

const filter = arr.filter(item => item % 2 === 0);

const filter2 = cesta.filter(item => item === "banana");

console.log(filter);
console.log(filter2);

const find = arr.find(item => item === 3);
const find2 = cesta.find(item => item === "maçã");

console.log(find);
console.log(find2);