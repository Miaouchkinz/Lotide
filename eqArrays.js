// AssertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Tests

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// eqArrays([1, 2, 3], [3, 2, 1]) // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);