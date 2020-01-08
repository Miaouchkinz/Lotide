const assertArraysEqual = function(firstArray, secondArray) {
  let isSame = true;
  if (firstArray.length !== secondArray.length) {
    isSame = false;
  }
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      isSame = false;
    }
  }
  if (isSame === true) {
    console.log(`✅✅✅ Assertion Passed: these arrays are equal!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: these arrays are not equal!`);
  }
};

// Tests

// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// assertArraysEqual([1, 2, 3], [3, 2, 1]);

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
