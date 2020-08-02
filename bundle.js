"use strict";

var arr = [1, 2, 3, 4, 5, 6];
var cesta = ["banana", "maçã", "abacate", "abacaxi"];
var squareArr = arr.map(function (item) {
  return item * item;
}); //console.log(squareArr);

var teste = function teste() {
  return [2, 5, 8, 4];
};

var teste2 = function teste2() {
  return {
    nome: "Sidicley"
  };
};

console.log(teste());
console.log(teste2());
