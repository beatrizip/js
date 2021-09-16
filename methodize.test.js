import { methodize } from "./methodize";

test("when add a sum function, the result is and add", () => {
  function add(a, b) {
    return a + b;
  }
  Number.prototype.add = methodize(add); //Asociamos al prototype del tipo primitivo Number
  expect((3).add(5)).toEqual(8);
});

test("when add a sum function, the result is and add", () => {
  function subtract(a, b) {
    return a - b;
  }
  Number.prototype.subtract = methodize(subtract);
  expect((5).subtract(2)).toEqual(3);
});

test("when add a sum function, the result is and add", () => {
  function concat(a, b) {
    return a + b;
  }

  String.prototype.concat = methodize(concat);
  expect("hola".concat("adios")).toEqual("holaadios");
});
