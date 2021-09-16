// Paint fill (45 mins)

// Implement a "paint fill" function similar to what is found
// in many image editing programs. That is, given a screen
// (represented by a two dimensional array of colors),
// a point, and a new color, fill in the surrounding area
// until the old color changes. For example:
//
// const imageTest = [
//   [1, 2, 3, 4],
//   [5, 2, 4, 3],
//   [3, 9, 2, 6],
//   [2, 9, 2, 8]
// ];
//
// paintFill(imageTest, [0, 1], 7);
//
// -> [
//   [1, 7, 3, 4], si hay un 2 colindante a otro se cambia de color, si no nada
//   [5, 7, 4, 3],
//   [3, 9, 7, 6],
//   [2, 9, 7, 8]
// ]clear

export function paintFill(image, point, newColor) {
  let newImage = image;
  let coordX = point[0];
  let coordY = point[1];
  let oldColor = image[coordX][coordY];
  let adjX;
  let adjY;
  let isPoint;
  let pos;
  let adjacents = [];
  let imageLength = image.length;
  let insideMatrix = false;

  image[coordX][coordY] = newColor;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      adjX = coordX + i;
      adjY = coordY + j;
      isPoint = adjX === coordX && adjY === coordY;
      insideMatrix =
        adjX < imageLength && adjY < imageLength && adjX >= 0 && adjY >= 0;

      if (insideMatrix && !isPoint) {
        pos = [adjX, adjY];
        adjacents.push(pos);
      }
    }
  }

  //console.log(`Siguiente posición: ${point}`);
  //console.log(printImage(newImage));

  adjacents.forEach((element) => {
    if (image[element[0]][element[1]] === oldColor) {
      paintFill(image, element, newColor);
    }
  });

  return newImage;
}

//module.exports = paintFill;

//---------------------------------

function printImage(image) {
  image.forEach((line) => console.log(line));
  return "";
}

/*
const imageTest = [
  [1, 2, 3, 4],
  [5, 2, 4, 3],
  [3, 9, 2, 6],
  [2, 9, 2, 8],
];

const newColor = 7;
const initPos = [2, 2];



console.log(`VALORES INICIALES`);
console.log(`Nuevo color: ${newColor}`);
console.log(`Posición inicial: ${initPos}`);
console.log(printImage(imageTest));

paintFill(imageTest, initPos, newColor);

*/
