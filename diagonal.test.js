import { diagonalDifference } from "./diagonal";

let matrix = `7,-12,6
-3,8,1
23,-16,4`;

test("diff of diagonal matrix sould be 37", () => {
  expect(diagonalDifference(matrix)).toEqual(18);
});
