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

// Implement without which will return a subset of agiven array, removing unwanted
// elements.

const without = function(givenArray, removeElements) {
  let modifiedArray = [];
  for (let i = 0; i < givenArray.length; i++) {
    if (removeElements[i] !== givenArray[i]) {
      modifiedArray.push(givenArray[i]);
    }
  }
  return modifiedArray;
};

// Tests

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertArraysEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world", "lighthouse"]); // no need to capture return value for this test case
