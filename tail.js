const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(tailOfArray) {
  tailOfArray.shift();
  return tailOfArray;
};

// TEST 1:
// An array with only one element should yield an empty array for its tail
// const favoritePets = ["cat"];
// assertEqual(tail(favoritePets).length, 0);

// TEST 2:
// An empty array should yield an empty array for its tail
// const emptyArray = [];
// assertEqual(tail(emptyArray).length, 0);