const eqArrays  = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

// The function will return a "slice of the array with elements taken from
// the beginning." It should keep going until the callback/predicate returns
// a truthy value.
const takeUntil = function(array, callback) {
  let results = [];
  for (let element in array) {
    if (!callback(array[element])) {
      results.push(array[element]);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;

// TEST
// assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(["hello", "there", "you"], x => x === "you"), [ "hello", "there"]);
