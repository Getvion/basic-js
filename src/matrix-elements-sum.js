const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  let grid = [];
  for (let col = 0; col < cols; col++) grid[col] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      grid[col][row] = matrix[row][col];
    }
  }

  matrix = grid;
  for (let i = 0; i < matrix.length; i++) {
    let mat = matrix[i];
    for (let j = 0; j < mat.length; j++) {
      if (mat[j] == 0) break;
      result += mat[j];
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
