const assertEqual = require('./assertEqual');

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

module.exports = tail;