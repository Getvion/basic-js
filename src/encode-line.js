const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str == '') return '';
  const arr = str.split('');
  const current = arr[0];
  const result = '';
  const counter = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (current == arr[i]) {
      counter++;
    } else {
      if (counter > 1) {
        result += `${counter}${current}`;
      } else {
        result += current;
      }
      counter = 1;
      current = arr[i];
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
