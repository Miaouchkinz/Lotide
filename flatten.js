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



// Tests

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);// => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, "four", ["six", 4], 5, [6, "nine"], "cat", ["jazz"]]), [1, "four", "six", 4, 5, 6, "nine", "cat", "jazz"]);
