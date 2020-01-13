const eqArrays  = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Implement without which will return a subset of agiven array, removing unwanted
// elements.

const without = function(givenArray, removeElements) {
  let modifiedArray = [];
  for (let item of givenArray) {
    if (!removeElements.includes(item)) {
      modifiedArray.push(item);
    }
  }
  return modifiedArray;
};

module.exports = without;

// Tests

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
