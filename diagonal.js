// Diagonal difference (45 mins)

// Write a function that accepts a square matrix in string form
// (where columns are comma-separated, and each row is on a new line),
// and returns a string representing the difference between the sums
// of its diagonals. For example:
//
// let matrix =
// `7,-12,6
//  -3,8,1
//  23,-16,4`;
//
// diagonalDifference(matrix) -> '-18'
// (because 7 + 8 + 4 = 19, and 6 + 8 + 23 = 37, hence 19 - 37 = 18).

function diagonalDifference(matrix) {
  let lines = matrix.split(/\r\n|\r|\n/);
  let matrixLength = lines.length;
  let columns = [];
  let main = 0;
  let second = 0;

  lines.map((line, index) => {
    columns = line.split(",").map(Number); //String a number
    main += columns[index];
    second += columns[matrixLength - index - 1];
  });

  return Math.abs(main - second); //abs, valor absoluto de un numero
}

module.exports = diagonalDifference;

let matrix = `7,-12,6
-3,8,1
23,-16,4`;

console.log(diagonalDifference(matrix));
//(because 7 + 8 + 4 = 19, and 6 + 8 + 23 = 37, hence 19 - 37 = 18).
