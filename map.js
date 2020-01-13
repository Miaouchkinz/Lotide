const eqArrays  = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//Map function to performe a callback function on a given array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST
// assertArraysEqual(map(["cat", "dog", "bird"], word => word[0]), ["c", "d", "b"]);
// assertArraysEqual(map(["jump", "around"], word => word[0]), ["j", "a"]);
// assertArraysEqual(map(["test", "are", "so", "useful"], word => word[0]), ["t", "a", "s", "u"]);