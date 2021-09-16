import maxSequence from "./array";

test("the sum of max secuence sould be greater than the rest", () => {
  let arr = [-2, 1, 3];
  let ej = new maxSequence(arr);
  let result = ej.total;

  expect(result).toEqual(4);
  expect(result).toBeGreaterThan(ej.sumArray(arr));
});

test("the sum of empty array sould be 0", () => {
  let arr = [];
  let ej = new maxSequence(arr);
  let result = ej.total;

  expect(result).toEqual(0);
});

test("the sum of negative values array sould be 0", () => {
  let arr = [-2, -3, -1, -5];
  let ej = new maxSequence(arr);
  let result = ej.total;

  expect(result).toEqual(0);
});

test("the subarray of positive values array sould be the initial array", () => {
  let arr = [1, 4, 5, 7];
  let ej = new maxSequence(arr);

  expect(ej.subArray).toEqual(arr);
});
