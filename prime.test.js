const prime = require("./prime");

test("negative number sould not be prime", () => {
  expect(prime.primeTester(-3)).toBeFalsy();
});

test("number < 2 sould not be prime", () => {
  expect(prime.primeTester(1)).toBeFalsy();
});

test("number = 2 sould be prime", () => {
  expect(prime.primeTester(2)).toBeTruthy();
});

test("number = 14 sould not be prime", () => {
  expect(prime.primeTester(14)).toBeFalsy();
});

test("number = 1458 sould not be prime", () => {
  expect(prime.primeTester(1458)).toBeFalsy();
});

test("number = 37 sould be prime", () => {
  expect(prime.primeTester(37)).toBeTruthy();
});
