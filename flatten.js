const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// Given an array with other arrays inside, it can flatten it into a single-level
// array.

const flatten = function(array) {
  let flattenedArray = [];
  for (let item of array) {
    if (!Array.isArray(item)) {
      flattenedArray.push(item);
    } else {
      for (let element of item) {
        flattenedArray.push(element);
      }
    }
  }
  return flattenedArray;
};

module.exports = flatten;

// Tests
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);// => [1, 2, 3, 4, 5, 6]
// assertArraysEqual(flatten([1, "four", ["six", 4], 5, [6, "nine"], "cat", ["jazz"]]), [1, "four", "six", 4, 5, 6, "nine", "cat", "jazz"]);
