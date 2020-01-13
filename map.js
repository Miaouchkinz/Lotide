// Our map function will take in two arguments:
// - An array to map
// - A callback function

// The map function will return a new array based on the results of the callback function.

// =====

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

//Map function to performe a callback function on a given array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST
// assertArraysEqual(map(["cat", "dog", "bird"], word => word[0]), ["c", "d", "b"]);

// assertArraysEqual(map(["jump", "around"], word => word[0]), ["j", "a"]);

// assertArraysEqual(map(["test", "are", "so", "useful"], word => word[0]), ["t", "a", "s", "u"]);