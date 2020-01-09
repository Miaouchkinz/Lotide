const eqArrays  = function(firstArray, secondArray) {
  let isSame = true;
  if (firstArray.length !== secondArray.length) {
    isSame = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      isSame = false;
    }
  }
  return isSame;
};

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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

// TEST
// assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(["hello", "there", "you"], x => x === "you"), [ "hello", "there"]);
