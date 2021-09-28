var fill = require("./fill");

let image = [
  [1, 2, 3, 4],
  [5, 2, 4, 3],
  [3, 9, 2, 6],
  [2, 9, 2, 8],
];
let pos = [2, 2];
let color = 7;
let output = [
  [1, 7, 3, 4],
  [5, 7, 4, 3],
  [3, 9, 7, 6],
  [2, 9, 7, 8],
];

test("color in [2, 2] position (2) soul be replace by 7", () => {
  expect(output[2][2]).toEqual(color);
});

test("color in collindant position soul be replace by 7", () => {
  expect(fill.paintFill(image, pos, color)).toEqual(output);
});
