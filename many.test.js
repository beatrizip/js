import { addMany } from "./many";

test("when call is (3)(4)(1)(7)() result sould be 15 ", () => {
  expect(addMany(3)(4)(1)(7)()).toEqual(15);
});

test("expect undefined when call is fn()", () => {
  expect(addMany()).toEqual(undefined);
});
