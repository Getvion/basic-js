const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arrFirst = str1.split('');
  const arrSectond = str2.split('');
  let counter = 0;

  for (let i = 0; i < arrFirst.length; i++) {
    if (arrSectond.includes(arrFirst[i])) {
      arrSectond.splice(arrSectond.indexOf(arrFirst[i]), 1);
      arrFirst.splice(i, 1);
      i--;
      counter++;
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
