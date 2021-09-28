var flatten = require("./flatten.js");

test("object one nested level to be flatten", () => {
  let input = { foo: { bar: 3 } };
  let output = { "foo.bar": 3 };
  expect(flatten(input)).toMatchObject(output);
});

test("object one level one array nested sould be flatten", () => {
  let input = { foo: [{ bar: 3 }] };
  let output = { "foo.0.bar": 3 };
  expect(flatten(input)).toMatchObject(output);
});

test("object two level and one array nested sould be flatten", () => {
  let input = {
    foo: [
      { bar: 3, yeah: "hi" },
      { bar: 1, yeah: "urg" },
    ],
  };

  let output = {
    "foo.0.bar": 3,
    "foo.0.yeah": "hi",
    "foo.1.bar": 1,
    "foo.1.yeah": "urg",
  };

  expect(flatten(input)).toMatchObject(output);
});

test("object 3 level nested sould be flatten", () => {
  let input = {
    city: "fuenla",
    foo: { bar: 3, yeah: { a: "a", b: "b", c: "c" } },
    heigth: "1,57",
  };

  let output = {
    city: "fuenla",
    "foo.bar": 3,
    "foo.yeah.a": "a",
    "foo.yeah.b": "b",
    "foo.yeah.c": "c",
    heigth: "1,57",
  };

  expect(flatten(input)).toMatchObject(output);
});

test("object 4 level nested sould be flatten", () => {
  let input = {
    city: "fuenla",
    foo: {
      bar: 3,
      yeah: { a: "a", b: "b", c: { nombre: "pepe", apellidos: "garcia" } },
    },
    heigth: "1,57",
  };

  let output = {
    city: "fuenla",
    "foo.bar": 3,
    "foo.yeah.a": "a",
    "foo.yeah.b": "b",
    "foo.yeah.c.nombre": "pepe",
    "foo.yeah.c.apellidos": "garcia",
    heigth: "1,57",
  };

  expect(flatten(input)).toMatchObject(output);
});
