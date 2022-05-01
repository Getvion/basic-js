const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  const numbers = [];

  arr.forEach((element, i) => {
    arr.splice(i, 1);
    const number = +arr.join('');
    numbers.push(number);
    arr.splice(i, 0, element);
  });

  return numbers.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit,
};
