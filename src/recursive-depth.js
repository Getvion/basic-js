const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  array = [];
  calculateDepth(arr, count = 1) {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.array.push(count);
        count++;
        this.calculateDepth([...element], count);
      }
    });
    this.array.sort((a, b) => b - a)[0];
    console.log(this.array);
    return count;
  }
}

module.exports = {
  DepthCalculator,
};
