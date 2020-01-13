const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;