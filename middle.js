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

// Returns the midIndex element of a given array
const middle = function(array) {
  let midIndex = [];
  // One to two elements, returns empty array
  if (array.length <= 2) {
    midIndex = [];
  // Uneven number returns one element
  } else if (array.length % 2 === 1) {
    midIndex.push(array[Math.round((array.length - 1) / 2)]);
  // Even number returns two elements
  } else if (array.length % 2 === 0) {
    midIndex.push(array[Math.floor((array.length - 1) / 2)], array[Math.floor((array.length - 1) / 2 + 1)]);
  }
  return midIndex;
};

// TEST

// One to two elements, returns empty array
// assertArraysEqual(middle([1]), []) // => []
// assertArraysEqual(middle([1, 2]), []) // => []

// Uneven number returns one element
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

// Even number returns two elements
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]