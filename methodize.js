"use strict";
// Methodize (20 mins)

// A binary function is a function that takes two inputs
// and returns a value, like for example add(3,5) -> 8.
// You need to write a function named "methodize", that
// converts a binary function to a method. For example:
//
// function add (a, b) {return a + b;}
// Number.prototype.add = methodize(add);
// (3).add(5) -> 8

function methodize(func) {
  return function (x) {
    return func(this, x); //this es el contexto de la llamada, el parámetro "a" en este caso
  };
}

//module.exports = methodize;

function add(a, b) {
  return a + b;
}
Number.prototype.add = methodize(add); //Asociamos al prototype del tipo primitivo Number
console.log((3).add(5));

function subtract(a, b) {
  return a - b;
}
Number.prototype.subtract = methodize(subtract);
console.log((5).subtract(2));

function concat(a, b) {
  return a + b;
}
String.prototype.concat = methodize(concat);
console.log("hola".concat("adios"));
