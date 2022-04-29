const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ones = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      ones.push(i);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == -1) {
      arr.splice(j, 1);
      j--;
    }
  }
  arr.sort((a, b) => {
    return a - b;
  });
  for (let k = 0; k < ones.length; k++) {
    arr.splice(ones[k], 0, -1);
  }
  return [...arr];
}

module.exports = {
  sortByHeight,
};
